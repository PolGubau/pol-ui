import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { FC } from 'react';
import { createRef, forwardRef } from 'react';
import { act } from 'react-dom/test-utils';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { describe, expect, it, vi } from 'vitest';
import type { TabsRef } from './Tabs';
import { Tabs } from './Tabs';

describe('Components / Tabs', () => {
  it('should open tab when clicked', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);

    await user.click(firstTab());
    expect(firstTab()).toHaveFocus();

    const nextTab = tabs()[1];

    await user.click(nextTab);

    expect(firstTab()).toHaveAttribute('aria-selected', 'false');
    expect(nextTab).toHaveFocus();
    expect(nextTab).toHaveAttribute('aria-selected', 'true');
  });

  it('should open focused tab when `Enter` is pressed', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);

    await user.click(firstTab());
    expect(firstTab()).toHaveFocus();

    await user.keyboard('[ArrowRight]');

    const nextTab = tabs()[1];

    expect(nextTab).toHaveFocus();

    await user.keyboard('[Enter]');

    expect(nextTab).toHaveAttribute('aria-selected', 'true');
  });

  it('should do nothing when Left Arrow is pressed and first tab is already focused', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);

    await user.click(firstTab());
    expect(firstTab()).toHaveFocus();

    await user.keyboard('[ArrowLeft]');

    expect(firstTab()).toHaveFocus();
  });

  it('should focus previous tab when Left Arrow is pressed', async () => {
    const user = userEvent.setup();
    render(<TestTabsDifferentActiveItem />);

    await user.click(firstTab());
    expect(activeTab()).toHaveFocus();

    await user.keyboard('[ArrowLeft]');

    expect(firstTab()).toHaveFocus();
  });

  it('should do nothing when Right Arrow is pressed and last tab is already focused', async () => {
    const user = userEvent.setup();
    render(<TestTabsLastActiveItem />);

    await user.click(lastTab());

    expect(lastTab()).toHaveAttribute('aria-selected', 'true');
    expect(lastTab()).toHaveFocus();

    await user.keyboard('[ArrowRight]');

    expect(lastTab()).toHaveFocus();
  });

  it('should focus next tab when Right Arrow is pressed', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);

    await user.click(firstTab());

    await user.keyboard('[ArrowRight]');

    const nextTab = tabs()[1];

    expect(nextTab).toHaveFocus();
  });

  it('should call onActiveTabChanged when clicked', async () => {
    const user = userEvent.setup();

    const helper = { onActiveTabChange: () => void 0 };
    const spy = vi.spyOn(helper, 'onActiveTabChange');

    render(<TestTabs onActiveTabChange={helper.onActiveTabChange} />);

    await user.click(firstTab());
    expect(firstTab()).toHaveFocus();

    const nextTab = tabs()[1];

    await user.click(nextTab);

    expect(firstTab()).toHaveAttribute('aria-selected', 'false');
    expect(nextTab).toHaveFocus();
    expect(nextTab).toHaveAttribute('aria-selected', 'true');

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should open tab and call onActiveTabChanged when setActiveTab is called', async () => {
    const ref = createRef<TabsRef>();

    const helper = { onActiveTabChange: () => void 0 };
    const spy = vi.spyOn(helper, 'onActiveTabChange');

    render(<TestTabs ref={ref} onActiveTabChange={helper.onActiveTabChange} />);

    expect(firstTab()).toHaveAttribute('aria-selected', 'true');

    act(() => {
      ref.current?.setActiveTab(1);
    });

    const nextTab = tabs()[1];
    expect(firstTab()).toHaveAttribute('aria-selected', 'false');
    expect(nextTab).toHaveAttribute('aria-selected', 'true');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should have no tab item rendered when condition is false', async () => {
    render(<TestConditionalTabs condition={false} />);
    const tabsLength = tabs().length;

    expect(tabsLength).toBe(0);
  });
});

interface TestTabsProps {
  onActiveTabChange?: (activeTab: number) => void;
  condition?: boolean;
}

// eslint-disable-next-line react/display-name
const TestTabs = forwardRef<TabsRef, TestTabsProps>(({ onActiveTabChange }, ref) => (
  <Tabs aria-label="Test tabs" onActiveTabChange={onActiveTabChange} ref={ref}>
    <Tabs.Item title="Profile" icon={HiUserCircle}>
      Profile content
    </Tabs.Item>
    <Tabs.Item title="Dashboard" icon={MdDashboard}>
      Dashboard content
    </Tabs.Item>
    <Tabs.Item title="Settings" icon={HiAdjustments}>
      Settings content
    </Tabs.Item>
    <Tabs.Item title="Contacts" icon={HiClipboardList}>
      Contacts content
    </Tabs.Item>
    <Tabs.Item disabled title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs>
));

// eslint-disable-next-line react/display-name
const TestConditionalTabs = forwardRef<TabsRef, TestTabsProps>(({ condition }) => (
  <Tabs aria-label="Test tabs">
    {condition && (
      <Tabs.Item title="Profile" icon={HiUserCircle}>
        Profile content
      </Tabs.Item>
    )}
  </Tabs>
));

const TestTabsDifferentActiveItem: FC = () => (
  <Tabs aria-label="Test tabs">
    <Tabs.Item title="Profile" icon={HiUserCircle}>
      Profile content
    </Tabs.Item>
    <Tabs.Item active title="Dashboard" icon={MdDashboard}>
      Dashboard content
    </Tabs.Item>
    <Tabs.Item title="Settings" icon={HiAdjustments}>
      Settings content
    </Tabs.Item>
    <Tabs.Item title="Contacts" icon={HiClipboardList}>
      Contacts content
    </Tabs.Item>
    <Tabs.Item disabled title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs>
);

const TestTabsLastActiveItem: FC = () => (
  <Tabs aria-label="Test tabs">
    <Tabs.Item title="Profile" icon={HiUserCircle}>
      Profile content
    </Tabs.Item>
    <Tabs.Item title="Dashboard" icon={MdDashboard}>
      Dashboard content
    </Tabs.Item>
    <Tabs.Item title="Settings" icon={HiAdjustments}>
      Settings content
    </Tabs.Item>
    <Tabs.Item title="Contacts" icon={HiClipboardList}>
      Contacts content
    </Tabs.Item>
    <Tabs.Item active title="Still working">
      Completely functional content
    </Tabs.Item>
  </Tabs>
);

const tabs = () => screen.queryAllByRole('tab');

const activeTab = () => tabs().find((tab) => tab.getAttribute('aria-selected') === 'true');

const firstTab = () => tabs()[0];

const lastTab = () => tabs()[tabs().length - 1];
