import { FC, useState } from 'react'
import './TabList.scss'
import { TTab } from '@/types'

type TTabList = {
  tabs: TTab[]
}

const TabList: FC<TTabList> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)
  const handleTabClick = (index: number) => setActiveTab(index)
  return (
    <div className='tablist'>
      <nav>
        <div className='tablist-tabs' role='tablist' aria-orientation='horizontal'>
          {tabs.map((tab, index) => (
            <button
              key={`tab-${index}`}
              role='tab'
              aria-controls={`panel-id-${index}`}
              aria-selected={activeTab === index}
              id={`tab-id-${index}`}
              onClick={() => handleTabClick(index)}
              className={`tablist_btn ${activeTab === index && 'tablist_btn-active'}`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </nav>
      <div className='tablist-panel'>
        {tabs.map((tab, index) => (
          <section
            key={`tabpanel-${index}`}
            hidden={activeTab !== index}
            role='tabpanel'
            aria-labelledby={`tab-id${index}`}
            id={`panel-id-${index}`}
          >
            {tab.content}
          </section>
        ))}
      </div>
    </div>
  )
}

export default TabList
