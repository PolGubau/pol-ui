import { AiFillHeart } from "react-icons/ai";
import { BsFillDatabaseFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { MdCastle } from "react-icons/md";
import { RiPoliceCarFill } from "react-icons/ri";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { TiWiFi } from "react-icons/ti";
import { IoIdCard } from "react-icons/io5";
import { firstPage } from "constants/navigation";
import { IMenuItem } from "./menuTypes";

export const defaultMenu: IMenuItem[] = [
  {
    name: "Dashboard",
    to: firstPage,
    icon: <HiHome />,
    action: null,
    label: "Dashboard",
    subMenuType: "none",
  },
  {
    name: "Authorization",
    to: "/auth",
    icon: <RiPoliceCarFill />,
    action: null,
    label: "Auth",
    subMenuType: "oneLevel",
    subMenus: [
      {
        name: "auth.tenant",
        to: "/auth/tenants",
        label: "Tenants",
        icon: "BiUserCircle",
      },
      {
        name: "auth.realm",
        to: "/auth/realms",
        label: "Realms",
        icon: "BiWorld ",
      },
      {
        name: "auth.role",
        to: "/auth/roles",
        label: "Roles",
        icon: "FaRegIdCard",
      },
      {
        name: "auth.privilege",
        to: "/auth/privileges",

        label: "Privileges",
        icon: "RiMedalFill",
      },
      {
        name: "auth.aclEntry",
        to: "/auth/aclEntry",
        label: "ACL Entries",
        icon: "RiPoliceCarFill",
      },
    ],
  },
  {
    name: "OrgUnit",
    to: "/orgunit",
    icon: <MdCastle />,
    action: null,
    label: "OrgUnit",
    subMenuType: "oneLevel",
    subMenus: [
      {
        name: "orgunit.profiles",
        to: "/orgunit/profiles",
        label: "Profiles",
        icon: "BiUserCircle",
      },
      {
        name: "orgunit.locations",
        to: "/orgunit/locations",
        label: "Locations",
        icon: "BiUserCircle",
      },
      {
        name: "orgunit.departments",
        to: "/orgunit/departments",
        label: "Departments",
        icon: "BiUserCircle",
      },
      {
        name: "orgunit.menus",
        to: "/orgunit/menus",
        label: "Menus",
        icon: "BiUserCircle",
      },
      {
        name: "orgunit.locationTypes",
        to: "/orgunit/locationTypes",
        label: "Location Types",
        icon: "BiUserCircle",
      },
      {
        name: "orgunit.locationAttributeTypes",
        to: "/orgunit/locationAttributeTypes",
        label: "Location Attribute Types",
        icon: "BiUserCircle",
      },
      {
        name: "orgunit.departmentTypes",
        to: "/orgunit/departmentTypes",
        label: "Department Types",
        icon: "BiUserCircle",
      },
      {
        name: "orgunit.menuTypes",
        to: "/orgunit/menuTypes",
        label: "Menu Types",
        icon: "BiUserCircle",
      },
      {
        name: "orgunit.apps",
        to: "/orgunit/apps",
        label: "Apps",
        icon: "BiUserCircle",
      },
    ],
  },
  {
    name: "Metadata",
    to: "/metadata",
    icon: <BsFillDatabaseFill />,
    action: null,
    label: "Metadata",
    subMenuType: "multiple",
    subMenus: [
      {
        name: "Global",
        icon: <TiWiFi />,
        subMenus: [
          {
            name: "metadata.global.codesystem",
            to: "/metadata/globalCodeSystems",
            label: "Code Systems",
            icon: "TbBinaryTree",
          },
          {
            name: "metadata.global.code",
            to: "/metadata/globalCodeSystemCodes",
            label: "Codes",
            icon: "TbBinaryTree2",
          },
          {
            name: "metadata.global.object",
            to: "/metadata/globalObjectDefinitions",
            label: "Objects",
            icon: "MdDataObject",
          },
          {
            name: "metadata.globalForms",
            to: "/metadata/globalForms",
            label: "Forms",
            icon: "TbForms",
          },
          {
            name: "metadata.global.script",
            to: "/metadata/globalScripts",
            label: "Scripts",
            icon: "TbScriptPlus",
          },
          {
            name: "metadata.global.customize",
            to: "/metadata/customize",
            label: "Customize",
            icon: "TbColorSwatch",
          },
        ],
      },
      {
        name: "Tenant",
        icon: <TiWiFi />,
        subMenus: [
          {
            name: "metadata.tenant.codesystem",
            to: "/metadata/tenantCodeSystems",
            label: "Code Systems",
            icon: "TbBinaryTree",
          },
          {
            name: "metadata.tenant.code",
            to: "/metadata/tenantCodeSystemCodes",
            label: "Codes",
            icon: "TbBinaryTree2",
          },
          {
            name: "metadata.tenant.codeoverride",
            to: "/metadata/codeSystemOverrides",
            label: "Code System Overrides",
            icon: "MdDataObject",
          },
          {
            name: "metadata.tenant.object",
            to: "/metadata/tenantObjectDefinitions",
            label: "Objects",
            icon: "MdDataObject",
          },
          {
            name: "metadata.tenant.form",
            to: "/metadata/tenantForms",
            label: "Forms",
            icon: "TbForms",
          },
          {
            name: "metadata.tenant.script",
            to: "/metadata/tenantScripts",
            label: "Scripts",
            icon: "TbScriptPlus",
          },
          {
            name: "metadata.tenant.customize",
            to: "/metadata/customize",
            label: "Tentant Customize",
            icon: "TbColorSwatch",
          },
        ],
      },
    ],
  },
  {
    name: "Diagnostics",
    to: "/diagnostics",
    icon: <AiFillHeart />,
    action: null,
    label: "Diagnostics",
    subMenuType: "multiple",
    subMenus: [
      {
        name: "Global",
        icon: <TiWiFi />,

        subMenus: [
          {
            name: "diagnostics.global.observationTypes",
            to: "/diagnostics/globalObservationTypes",
            label: "Observation Types",
            icon: "TbCategory2",
          },
          {
            name: "diagnostics.global.diagnosticReportTypes",
            to: "/diagnostics/globalDiagnosticReportTypes",
            label: "Diagnostic Report Types",
            icon: "TbCategory2",
          },
        ],
      },
      {
        name: "Tenant",
        icon: <TiWiFi />,

        subMenus: [
          {
            name: "diagnostics.tenant.observationTypes",
            to: "/diagnostics/tenantObservationTypes",
            label: "Observation Types",
            icon: "TbCategory2",
          },
          {
            name: "diagnostics.tenant.diagnosticReportTypes",
            to: "/diagnostics/tenantDiagnosticReportTypes",
            label: "Diagnostic Report Types",
            icon: "TbCategory2",
          },
        ],
      },
    ],
  },
  {
    name: "Telematik",
    to: "/telematik",
    icon: <TiWiFi />,
    action: null,
    label: "Telematik",
    subMenuType: "oneLevel",
    subMenus: [
      {
        name: "telematik.connectors",
        to: "/telematik/tiConnectors",
        label: "TI Connectors",
        icon: "BiUserCircle",
      },
    ],
  },
  {
    name: "Encounter",
    to: "/encounter",
    icon: <FaUserCircle />,
    action: null,
    label: "Encounter",
    subMenuType: "oneLevel",
    subMenus: [
      {
        name: "encounter.consentTypes",
        to: "/encounter/consentTypes",
        label: "Consent Types",
        icon: "BiUserCircle",
      },
    ],
  },
  {
    name: "Checkin",
    to: "/selfservicecheckin",
    icon: <IoIdCard />,
    action: null,
    label: "Checkin",
    subMenuType: "multiple",
    subMenus: [
      {
        name: "Global",
        icon: <TiWiFi />,

        subMenus: [
          {
            name: "selfservicecheckin.terminals",
            to: "/selfservicecheckin/terminals",
            label: "Check-in Terminals",
            icon: "TbAugmentedReality2",
          },
          {
            name: "selfservicecheckin.wizardStepTypes",
            to: "/selfservicecheckin/wizardStepTypes",
            label: "Wizard Step Types",
            icon: "TbAsset",
          },
          {
            name: "selfservicecheckin.globalWizardFlows",
            to: "/selfservicecheckin/globalWizardFlows",
            label: "Global Wizard Flows",
            icon: "TbBrandCitymapper",
          },
        ],
      },
      {
        name: "Tenant",
        icon: <TiWiFi />,

        subMenus: [
          {
            name: "selfservicecheckin.terminals",
            to: "/selfservicecheckin/terminals",
            label: "Check-in Terminals",
            icon: "TbAugmentedReality2",
          },
          {
            name: "selfservicecheckin.wizardStepTypes",
            to: "/selfservicecheckin/wizardStepTypes",
            label: "Wizard Step Types",
            icon: "TbAsset",
          },
          {
            name: "selfservicecheckin.globalWizardFlows",
            to: "/selfservicecheckin/globalWizardFlows",
            label: "Global Wizard Flows",
            icon: "TbBrandCitymapper",
          },
        ],
      },
    ],
  },
  {
    name: "Communication",
    to: "/communication",
    icon: <TbMessageCircle2Filled />,
    action: null,
    label: "Comm",
    subMenuType: "oneLevel",
    subMenus: [
      {
        name: "communication.smsProviderSettings",
        to: "/communication/smsProviderSettings",
        label: "SMS Provider Settings",
        icon: "BiUserCircle",
      },
      {
        name: "communication.smsTemplate",
        to: "/communication/smsTemplate",
        label: "SMS Template",
        icon: "BiUserCircle",
      },
      {
        name: "communication.emailSmtpSettings",
        to: "/communication/emailSmtpSettings",
        label: "E-mail SMTP Settings",
        icon: "BiUserCircle",
      },
      {
        name: "communication.emailTemplate",
        to: "/communication/emailTemplate",
        label: "E-mail Template",
        icon: "BiUserCircle",
      },
    ],
  },
];

export const menuWithoutDashboard = defaultMenu.filter(
  (item) => item.name !== "Dashboard"
);
