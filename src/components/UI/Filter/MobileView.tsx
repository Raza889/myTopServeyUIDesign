import React, { useState } from "react";
import { MTSSwitch } from 'components/UI/Checkbox/index';
import MTSButton from 'components/UI/Button/index';
import './style.scss';
import pan from 'Assets/Images/pan.png'
import flask from 'Assets/Images/flask.png'
import cross from 'Assets/Images/cross.png'
import chevronLeft from 'Assets/Images/chevronLeft.png'
interface FilterProps {

}

const Filter: React.SFC<FilterProps> = () => {
  let [search, setSearch] = useState<boolean>(false);
  let [earn, setEarn] = useState<boolean>(false);
  let [model, setModel] = useState<boolean>(false);
  let [brand, setbrand] = useState<boolean>(false);
  let [tab, setTab] = useState<string>("");
  const showBrand =()=>{
    setTab("ByBrand");
    setbrand(!brand);
  }

  return (
    <div className="MTS-filter-mb-container">
      <div className="MTS-filter-mb-right" onClick={() => setModel(!model)}>
        <img src={flask} alt="flask" className="MTS-filter-mb-img" />
        <div className="MTS-filter-mb-text">Filter</div>
      </div>
      <div className="MTS-filter-mb-search" onClick={() => setSearch(!search)}>
        <img src={pan} alt="pan" className="MTS-filter-mb-search-img" />
      </div>

      <div className={`MTS-filter-mb-search-container ${search ? "MTS-filter-mb-search-container-show" : "MTS-filter-mb-search-container-hide"}`} >
        <label htmlFor="mb-search" className="MTS-filter-mb-search-label">
          <img src={pan} alt="Pan" className="MTS-filter-mb-search-label-img" />
        </label>
        <input type="text" className="MST-filter-mb-search-input" id="mb-search" />
        <div className="MTS-filter-mb-icon" onClick={() => setSearch(!search)}>
          <img src={cross} alt="cross" className="MTS-filter-mb-icon-img" />
        </div>
      </div>
      <div className={`MTS-search-model ${model ? "MTS-search-model-show" : "MTS-search-model-hide"}`}>
        <div className="MTS-model-header">
          <div className="MTS-model-back-icon" onClick={() => setModel(!model)}>
            <img src={chevronLeft} alt="back" className="MTS-model-back-icon-img" />
          </div>
          <div className="MTS-mobile-header">
            Filter
            </div>
          <div>

          </div>
        </div>
        <div className="MTS-model-body">
          <div className="MTS-model-body-container">
            <div className={`MTS-model-body-list MTS-model-body-list-1
             ${tab === "all" && "MTS-model-body-list-selected"} ` }
             onClick={() => setTab("all")}
             >
              All
            </div>
            <div className={`MTS-model-body-list MTS-model-body-list-2
            ${tab === "Recommended" && "MTS-model-body-list-selected"} `}
             onClick={() => setTab("Recommended")}
             >
              Recommended
            </div>
            <div className={`MTS-model-body-list MTS-model-body-list-3
            ${tab === "HighestPay" && "MTS-model-body-list-selected"} `}
             onClick={() => setTab("HighestPay")}
             >
              Highest Pay
            </div>
            <div className={`MTS-model-body-list MTS-model-body-list-4
            ${tab === "Newest" && "MTS-model-body-list-selected"} `}
             onClick={() => setTab("Newest")}
             >
              Newest
            </div>
            <div className={`MTS-model-body-list MTS-model-body-list-5
            ${tab === "Abandoned" && "MTS-model-body-list-selected"} 
            `}
             onClick={() => setTab("Abandoned")}
             >
              Abandoned
            </div>
            <div className={`MTS-model-body-list MTS-model-body-list-6 
            ${tab === "ByBrand" && "MTS-model-body-list-selected"}`} onClick={showBrand}>
              <div>By Brand <span className="MTS-model-body-list-count">3</span>
              </div>
              <img src={chevronLeft} alt="next" className="MTS-model-body-list-img" />
            </div>
            <div className="MTS-model-body-list MTS-model-body-list-7">
              Show earned
              <span>
                <MTSSwitch className="" label="showearned" name="showEarned" value={earn} onChange={() => setEarn(!earn)} />
              </span>
            </div>
          </div>
        </div>
        <div className="MTS-model-footer">
          <MTSButton type="Filled" title="Shows 13 Surveys" onSubmit={()=>setModel(!model)} disabled={tab=== ''?true:false} fontStyle="bold" size="lg" />
        </div>
      </div>
      <div className={`MTS-search-model ${brand ? "MTS-search-model-show" : "MTS-search-model-hide"}`}>
        <div className="MTS-model-header">
          <div className="MTS-model-back-icon" onClick={() => setbrand(!brand)}>
            <img src={chevronLeft} alt="back" className="MTS-model-back-icon-img" />
          </div>
          <div className="MTS-mobile-header">
            Brand
            <span className="MTS-model-body-list-count">3</span>
          </div>
          <div>

          </div>
        </div>
        <div className="MTS-model-body">
          <div className="MTS-model-body-container">
          <div className="MTS-filter-brand-menu-header">
                    <div className="MTS-filter-brand-menu-header-search" style={{height:45}}>
                      <label htmlFor="search" className="MTS-filter-brand-search-label">
                        <img src={pan} alt="Pan" className="MTS-filter-brand-search-label-img" />
                      </label>
                      <input type="text" name="search-brand" id="search" placeholder="Search brand" className="MTS-filter-brand-search-input" />
                    </div>
                  </div>
            <div className="MTS-model-body-list MTS-model-body-list-1">
              Apple 
              <MTSSwitch className="" label="showearned" name="showEarned" value={earn} onChange={() => setEarn(!earn)} />
            </div>
            <div className="MTS-model-body-list MTS-model-body-list-2">
              Amazon
              <MTSSwitch className="" label="showearned" name="showEarned" value={earn} onChange={() => setEarn(!earn)} />
            </div>
          </div>
        </div>
        <div className="MTS-model-footer">
          {/* <MTSButton type="Filled" title="Shows 13 Surveys" fontStyle="bold" size="lg" /> */}
        </div>
      </div>
    </div>
  )
}

export default Filter
