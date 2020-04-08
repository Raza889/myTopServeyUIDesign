import React, { useState } from "react";
import { MTSSwitch } from 'components/UI/Checkbox/index';
import { useMediaQuery } from 'react-responsive';
import MobileView from './MobileView'
import './style.scss';
import pan from 'Assets/Images/pan.png'
interface FilterProps {
  isCompany?: boolean,
}

const Filter: React.SFC<FilterProps> = ({
  isCompany
}) => {
  let [menu, setMenu] = useState<boolean>(false);
  let [tab, setTab] = useState<string>("all");
  let [earn, setEarn] = useState<boolean>(false);

  const showMenu = (e: any) => {
    setTab('ByBrand')
    setMenu(menu = !menu)
  }
  const isMobile = useMediaQuery({
    query: '(max-device-width: 576px)'
  })
  return (
    <div style={{ height: '100%', width: '100%' }}>
      {!isMobile ?
        <div className="MTS-filter-container">
          <div className="MTS-filter-row">
            {isCompany ?
              <div className="MTS-filter-row-right">
                <div className={`MTS-filter-item MTS-filter-item-company
                  ${tab === "all" && "MTS-filter-item-selected"}`} onClick={() => setTab("all")}>
                  All
                   </div>
                <div className={`MTS-filter-item MTS-filter-item-company ${tab === "Active" && "MTS-filter-item-selected"}`} onClick={() => setTab('Active')} >Active <span>3</span></div>
                <div className={`MTS-filter-item MTS-filter-item-company ${tab === "Completed" && "MTS-filter-item-selected"}`} onClick={() => setTab('Completed')}>Completed <span>3</span></div>
                <div className={`MTS-filter-item MTS-filter-item-company ${tab === "Inactive" && "MTS-filter-item-selected"}`} onClick={() => setTab('Inactive')}>Inactive <span>3</span></div>
              </div>
              :
              <div className="MTS-filter-row-right">
                <div className={`MTS-filter-item MTS-filter-item-1
                  ${tab === "all" && "MTS-filter-item-selected"}`} onClick={() => setTab("all")}>
                  All
                    </div>
                <div className={`MTS-filter-item MTS-filter-item-2 ${tab === "Recommended" && "MTS-filter-item-selected"}`} onClick={() => setTab('Recommended')} >Recommended</div>
                <div className={`MTS-filter-item MTS-filter-item-3 ${tab === "HighestPay" && "MTS-filter-item-selected"}`} onClick={() => setTab('HighestPay')}>Highest Pay</div>
                <div className={`MTS-filter-item MTS-filter-item-4 ${tab === "Newest" && "MTS-filter-item-selected"}`} onClick={() => setTab('Newest')}>Newest</div>
                <div className={`MTS-filter-item MTS-filter-item-5 ${tab === "ByBrand" && "MTS-filter-item-selected"}`} >
                  <div onClick={showMenu} className={`${menu ? "MTS-filter-open" : "MTS-filter-hide"}`}>
                    By Brand
              <span>^</span>
                  </div>
                  <div className={menu ? "MTS-filter-menu-background-show" : "MTS-filter-menu-background"} onClick={showMenu}></div>
                  <div className={menu ? "MTS-filter-brand-menu MTS-filter-brand-menu-show" : "MTS-filter-brand-menu MTS-filter-brand-menu-hide"} >
                    <div className="MTS-filter-brand-menu-header">
                      <div className="MTS-filter-brand-menu-header-search">
                        <label htmlFor="search" className="MTS-filter-brand-search-label">
                          <img src={pan} alt="Pan" className="MTS-filter-brand-search-label-img" />
                        </label>
                        <input type="text" name="search-brand" id="search" placeholder="Search brand" className="MTS-filter-brand-search-input" />
                      </div>
                    </div>
                    <div className="MTS-filter-brand-menu-list">
                      <div className="MTS-filter-brand-menu-item MTS-filter-brand-menu-item-1">Apple</div>
                      <div className="MTS-filter-brand-menu-item MTS-filter-brand-menu-item-2">Adobe</div>
                      <div className="MTS-filter-brand-menu-item MTS-filter-brand-menu-item-3">CacaCola</div>
                      <div className="MTS-filter-brand-menu-item MTS-filter-brand-menu-item-4">Facebook</div>
                      <div className="MTS-filter-brand-menu-item MTS-filter-brand-menu-item-5">VK</div>
                      <div className="MTS-filter-brand-menu-item MTS-filter-brand-menu-item-6">Pintrest</div>
                      <div className="MTS-filter-brand-menu-item MTS-filter-brand-menu-item-7">Google</div>
                    </div>
                  </div>
                </div>
                <div className={`MTS-filter-item MTS-filter-item-6 ${tab === "Abandoned" && "MTS-filter-item-selected"}`} onClick={() => setTab('Abandoned')}>Abandoned</div>
              </div>
            }
            {!isCompany &&
              <div className="MTS-filter-divider">

              </div>
            }
            {!isCompany && <div className="MTS-filter-row-left">
              <div className="MTS-filter-item MTS-filter-item-switch">
                <MTSSwitch className="MTS-filter-item-switch-box" label="showearned" name="showEarned" value={earn} onChange={() => setEarn(!earn)} /> Show earned
          </div>
            </div>}
          </div>
          <div className="MTS-search-container">
            <div className="Search-field-container">
              <div className="MTS-filter-brand-menu-header-search">
                <label htmlFor="search-page" className="MTS-filter-brand-search-label">
                  <img src={pan} alt="Pan" className="MTS-filter-brand-search-label-img" />
                </label>
                <input type="text" name="search" id="search-page" placeholder="Search" className="MTS-filter-brand-search-input" />
              </div>
            </div>
          </div>
        </div>
        :
        <MobileView />
      }
    </div>
  )
}

export default Filter
