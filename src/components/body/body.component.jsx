import React, { useState, useEffect } from "react";
import "./body.styles.scss";

import TabFont from '../tabs/tabFont/tabFont.component';
import TabLayout from '../tabs/tabLayout/tabLayout.component';
import TabPosition from '../tabs/tabPosition/tabPosition.component';
import TabGrid from '../tabs/tabGrid/tabGrid.component';
import TabColors from '../tabs/tabColors/tabColors.component';
import TabFavorites from '../tabs/tabFavorites/tabFavorites.component';

const Body = () => {


  // State
  const [activeTabId, setActiveTabId] = useState('0');

  // Functions
  const setActiveTabIdToState = (element) => {
    // choose clicked element
    const tab = element.className === "nav-tab" ? element : null;
    // if element is not null => setState with new data-id
    tab !== null && setActiveTabId(tab.getAttribute('data-id'))
  }


  const activateTab = (tabId) => {
    // 1. select all tabs
    const allTabs = [...document.querySelectorAll(".nav-tab")];
    // 2. select active tab with tab id
    const activeTab = allTabs[tabId]
    // 3. add active class to active tab
    activeTab.classList.add('active');
    // 4. select other tabs
    const otherTabs = allTabs.filter(
          (tab) => tab !== activeTab
        );
    // 5. remove active class other tabs
    otherTabs.forEach((tab) => tab.classList.remove("active"));
  }


  const getTabContentComponent = (tabId) => {

    return tabId === '0'
          ? <TabFont/>
          : tabId === '1'
          ? <TabLayout/>
          : tabId === '2'
          ? <TabPosition/>
          : tabId === '3'
          ? <TabGrid/>
          : tabId === '4'
          ? <TabColors/>
          : tabId === '5'
          ? <TabFavorites/>
          : ' '
  }

  // Use Effect
  useEffect(()=> {
    activateTab(activeTabId)
  },[activeTabId])

  

  return (
    <div className="body w-full">
      <div className="nav-tabs flex justify-between text-gray-700" onClick={(e) => setActiveTabIdToState(e.target)} >
        <div className="flex">
          <div className="nav-tab active" data-id="0">Font</div>
          <div className="nav-tab" data-id="1">Layout</div>
          <div className="nav-tab" data-id="2">Position</div>
          <div className="nav-tab" data-id="3">Grid</div>
          <div className="nav-tab" data-id="4">Colors</div>
        </div>
        <div className="nav-tab" data-id="5">Favorites</div>
      </div>

      <div className="tabContent">
        {
          getTabContentComponent(activeTabId)
        }
      </div>


    </div>
  );
};

export default Body;


