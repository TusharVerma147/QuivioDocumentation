import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: ['quivio/intro'],
  realTimeSidebar: [
    'realtime/introduction',
    {
      type: 'category',
      label: 'Components',
      items: ['realtime/components/baseInput', 'realtime/components/customButton', 'realtime/components/customBottomSheet', 'realtime/components/customGeneralHeader', 'realtime/components/customHomeHeader', 'realtime/components/customLoader','realtime/components/calendarComponent', 'realtime/components/customWeatherCard', 'realtime/components/customChart',{
        type: 'category',
        label: 'Cards',
        items: ['realtime/components/cards/square','realtime/components/cards/fullWidth','realtime/components/cards/optionsCard','realtime/components/cards/rankCard','realtime/components/cards/servicesCard'],
      }, 'realtime/components/customListTable','realtime/components/customTab','realtime/components/customTooltip','realtime/components/selectedTags','realtime/components/noInternet','realtime/components/noResult',],
    },
    {
      type: 'category',
      label: 'Modules',
      items: [{
        type: 'category',
        label: 'Auth',
        items: ['realtime/modules/auth/splash','realtime/modules/auth/login',],
      },'realtime/modules/home',{
        type: 'category',
        label: 'Present',
        items: ['realtime/modules/present/presentStats','realtime/modules/present/carCount','realtime/modules/present/netSales','realtime/modules/present/labor','realtime/modules/present/topGreeters','realtime/modules/present/bestSellers','realtime/modules/present/employees',],
      },
      {
        type: 'category',
        label: 'Historical',
        items: ['realtime/modules/historical/historical','realtime/modules/historical/carswashed','realtime/modules/historical/membership','realtime/modules/historical/weeklyStats','realtime/modules/historical/topGreeters','realtime/modules/historical/bestSellers'],
      },'realtime/modules/multisite',
      {
        type: 'category',
        label: 'Settings',
        items: ['realtime/modules/settings/siteListing','realtime/modules/settings/aboutUs','realtime/modules/settings/t&c','realtime/modules/settings/logout',],
      },
      {
        type: 'category',
        label: 'Charts',
        items: ['realtime/modules/charts/sales','realtime/modules/charts/labor','realtime/modules/charts/compare','realtime/modules/charts/membership',],
      },
     
       ],
    }
  ],
  quivioSidebar: [
    'quivio/inventory',
    {
      type: 'category',
      label: 'Components',
      items: ['quivio/components/intro'],
    },
    {
      type: 'category',
      label: 'Primitives',
      items: ['quivio/primitives/intro'],
    },
    {
      type: 'category',
      label: 'Navigation',
      items: ['quivio/navigation/intro'],
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
