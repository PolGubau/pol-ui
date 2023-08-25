import { BiUserCircle, BiWorld } from "react-icons/bi";
import { CgMoreVerticalAlt, CgPerformance } from "react-icons/cg";
import { FaRegIdCard } from "react-icons/fa";
import {
	MdAlternateEmail,
	MdClose,
	MdExpandLess,
	MdExpandMore,
	MdOutlineNotListedLocation,
	MdOutlineShortcut,
	MdOutlineTextsms,
	MdSave,
} from "react-icons/md";
import {
	RiExpandUpDownLine,
	RiMedalFill,
	RiMenuUnfoldLine,
	RiShieldUserLine,
} from "react-icons/ri";
import {
	TbAdjustmentsAlt,
	TbAlarm,
	TbAlertTriangle,
	TbMenu2,
	TbPlus,
	TbTrash,
	TbBinary,
	TbBook,
	TbBookmark,
	TbBraces,
	TbBrackets,
	TbBulb,
	TbCalendar,
	TbCamera,
	TbCheck,
	TbAsset,
	TbBrandCitymapper,
	TbColorSwatch,
	TbForms,
	TbScriptPlus,
	TbArrowDown,
	TbArrowLeft,
	TbArrowRight,
	TbArrowUp,
	TbAugmentedReality2,
	TbBarcode,
	TbClipboard,
	TbClockHour4,
	TbCode,
	TbCurrencyEuro,
	TbCurrencyDollar,
	TbCurrencyYen,
	TbLocation,
	TbCurrentLocation,
	TbBuildingStore,
	TbApps,
	TbTransform,
	TbDevices2,
	TbMoodCrazyHappy,
	TbPageBreak,
	TbRoute,
	TbRouter,
	TbDeviceIpad,
	TbTemplate,
	TbFileText,
	TbServerBolt,
	TbWifi,
	TbHeart,
	TbStar,
	TbBuildingCastle,
	TbMessages,
	TbDatabase,
	TbBuildingCommunity,
	TbHome,
	TbUpload,
	TbCloudUpload,
	TbLink,
	TbQuestionMark,
	TbEdit,
	TbCopy,
	TbClipboardCopy,
	TbArrowBarToUp,
	TbArrowBarToDown,
	TbArrowBarToLeft,
	TbArrowBarToRight,
} from "react-icons/tb";
import { TiFlowSwitch } from "react-icons/ti";
import { IconData, IconNames } from "../components/Icon/types.d";
// This code exports an array of objects containing icon names and their corresponding React components. The IconNames enum is used to ensure that only valid icon names are used. This code can be used in a React project to easily display icons by name.

export const icons: IconData[] = [
	{ name: IconNames.arrowBarUp, icon: <TbArrowBarToUp /> },
	{ name: IconNames.arrowBarRight, icon: <TbArrowBarToRight /> },
	{ name: IconNames.arrowBarLeft, icon: <TbArrowBarToLeft /> },
	{ name: IconNames.arrowBarDown, icon: <TbArrowBarToDown /> },
	{ name: IconNames.clipboard, icon: <TbClipboardCopy /> },
	{ name: IconNames.copy, icon: <TbCopy /> },
	{ name: IconNames.expandboth, icon: <RiExpandUpDownLine /> },
	{ name: IconNames.expandMore, icon: <MdExpandMore /> },
	{ name: IconNames.expandLess, icon: <MdExpandLess /> },
	{ name: IconNames.minimize, icon: <MdExpandLess /> },
	{ name: IconNames.expand, icon: <MdExpandMore /> },
	{ name: IconNames.more, icon: <CgMoreVerticalAlt /> },
	{ name: IconNames.plus, icon: <TbPlus /> },
	{ name: IconNames.menus, icon: <TbMenu2 /> },
	{ name: IconNames.alarm, icon: <TbAlarm /> },
	{ name: IconNames.trash, icon: <TbTrash /> },
	{ name: IconNames.warning, icon: <TbAlertTriangle /> },
	{ name: IconNames.settings, icon: <TbAdjustmentsAlt /> },
	{ name: IconNames.binary, icon: <TbBinary /> },
	{ name: IconNames.book, icon: <TbBook /> },
	{ name: IconNames.bookmark, icon: <TbBookmark /> },
	{ name: IconNames.braces, icon: <TbBraces /> },
	{ name: IconNames.brackets, icon: <TbBrackets /> },
	{ name: IconNames.light, icon: <TbBulb /> },
	{ name: IconNames.calendar, icon: <TbCalendar /> },
	{ name: IconNames.camera, icon: <TbCamera /> },
	{ name: IconNames.check, icon: <TbCheck /> },
	{ name: IconNames.asset, icon: <TbAsset /> },
	{ name: IconNames.map, icon: <TbBrandCitymapper /> },
	{ name: IconNames.form, icon: <TbForms /> },
	{ name: IconNames.script, icon: <TbScriptPlus /> },
	{ name: IconNames.palette, icon: <TbColorSwatch /> },
	{ name: IconNames.user, icon: <BiUserCircle /> },
	{ name: IconNames.ar, icon: <TbAugmentedReality2 /> },
	{ name: IconNames.world, icon: <BiWorld /> },
	{ name: IconNames.idcard, icon: <FaRegIdCard /> },
	{ name: IconNames.medal, icon: <RiMedalFill /> },
	{ name: IconNames.arrowright, icon: <TbArrowRight /> },
	{ name: IconNames.arrow, icon: <TbArrowRight /> },
	{ name: IconNames.arrowleft, icon: <TbArrowLeft /> },
	{ name: IconNames.arrowup, icon: <TbArrowUp /> },
	{ name: IconNames.arrowdown, icon: <TbArrowDown /> },
	{ name: IconNames.scan, icon: <TbBarcode /> },
	{ name: IconNames.object, icon: <TbBraces /> },
	{ name: IconNames.array, icon: <TbBrackets /> },
	{ name: IconNames.paste, icon: <TbClipboard /> },
	{ name: IconNames.clock, icon: <TbClockHour4 /> },
	{ name: IconNames.code, icon: <TbCode /> },
	{ name: IconNames.euro, icon: <TbCurrencyEuro /> },
	{ name: IconNames.dollar, icon: <TbCurrencyDollar /> },
	{ name: IconNames.yen, icon: <TbCurrencyYen /> },
	{ name: IconNames.profile, icon: <RiShieldUserLine /> },
	{ name: IconNames.location, icon: <TbLocation /> },
	{ name: IconNames.position, icon: <TbCurrentLocation /> },
	{ name: IconNames.pointer, icon: <MdOutlineNotListedLocation /> },
	{ name: IconNames.store, icon: <TbBuildingStore /> },
	{ name: IconNames.menuRigth, icon: <RiMenuUnfoldLine /> },
	{ name: IconNames.apps, icon: <TbApps /> },
	{ name: IconNames.performance, icon: <CgPerformance /> },
	{ name: IconNames.transform, icon: <TbTransform /> },
	{ name: IconNames.device, icon: <TbDevices2 /> },
	{ name: IconNames.crazyHappy, icon: <TbMoodCrazyHappy /> },
	{ name: IconNames.pageBreak, icon: <TbPageBreak /> },
	{ name: IconNames.wizard, icon: <TbRoute /> },
	{ name: IconNames.router, icon: <TbRouter /> },
	{ name: IconNames.ipad, icon: <TbDeviceIpad /> },
	{ name: IconNames.flowSwitch, icon: <TiFlowSwitch /> },
	{ name: IconNames.sms, icon: <MdOutlineTextsms /> },
	{ name: IconNames.email, icon: <MdAlternateEmail /> },
	{ name: IconNames.template, icon: <TbTemplate /> },
	{ name: IconNames.file, icon: <TbFileText /> },
	{ name: IconNames.server, icon: <TbServerBolt /> },
	{ name: IconNames.shortcut, icon: <MdOutlineShortcut /> },
	{ name: IconNames.wifi, icon: <TbWifi /> },
	{ name: IconNames.hearth, icon: <TbHeart /> },
	{ name: IconNames.star, icon: <TbStar /> },
	{ name: IconNames.castle, icon: <TbBuildingCastle /> },
	{ name: IconNames.messages, icon: <TbMessages /> },
	{ name: IconNames.database, icon: <TbDatabase /> },
	{ name: IconNames.scripts, icon: <TbScriptPlus /> },
	{ name: IconNames.departments, icon: <TbBuildingCommunity /> },
	{ name: IconNames.home, icon: <TbHome /> },
	{ name: IconNames.upload, icon: <TbUpload /> },
	{ name: IconNames.uploadCloud, icon: <TbCloudUpload /> },
	{ name: IconNames.close, icon: <MdClose /> },
	{ name: IconNames.trash, icon: <TbTrash /> },
	{ name: IconNames.save, icon: <MdSave /> },
	{ name: IconNames.link, icon: <TbLink /> },
	{ name: IconNames.question, icon: <TbQuestionMark /> },
	{ name: IconNames.edit, icon: <TbEdit /> },
];
type IconName = keyof typeof IconNames;

export default icons;
export type { IconName };
