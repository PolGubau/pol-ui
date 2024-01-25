import { IBoolean } from '../PoluiProvider'

/**
 * @name InputProps
 * @description Interface for the icons of the Input component
 * @property base `string`
 * @property svg `string`
 * @property left `string`
 * @property right `string`
 */
export interface InputFieldIconTheme {
  base: string
  svg: string
  left: string
  right: string
}
/**
 * @name InputInputTheme
 * @description Interface for the theme of the input part of the Input component
 * @property base `string`
 * @property sizes `MainSizes`
 * @property colors `Colors`
 * @property label `object`
 * @property withIcon `IBoolean`
 * @property withRightIcon `IBoolean`
 * @property withAddon `IBoolean`
 * @property withShadow `IBoolean`
 * @author Pol Gubau Amores - https://polgubau.com
 */
export interface InputInputTheme {
  base: string
  sizes: MainSizes
  colors: Colors
  label: {
    base: string
  }
  border: IBoolean
  withIcon: IBoolean
  withRightIcon: IBoolean
  withAddon: IBoolean
  withShadow: IBoolean
}
/**
 * @name InputFieldTheme
 * @description Interface for the theme of the field part of the Input component
 * @property base `string`
 * @property icons `InputFieldIconTheme`
 * @property input `InputInputTheme`
 * @author Pol Gubau Amores - https://polgubau.com
 */
export interface InputFieldTheme {
  base: string
  icons: InputFieldIconTheme
  input: InputInputTheme
}
/**
 * @name InputTheme
 * @description Interface for the theme of the Input component
 * @property base `string`
 * @property addon `string`
 * @property field `InputFieldTheme`
 * @author Pol Gubau Amores - https://polgubau.com
 */
export interface InputTheme {
  root: {
    base: string
    labelPosition: {
      left: string
      top: string
    }
  }
  base: string
  addon: string
  label: string
  field: InputFieldTheme
}
