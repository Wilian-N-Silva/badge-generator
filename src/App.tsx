import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BadgeStyle, BadgeType } from './Global/Types'
import { Form } from './components/Form'
import { Badge } from './components/Badge'


function App() {

  // const [badgeList, setBadgeList] = useState<BadgeType[]>([])

  const handleNewItem = (newBadge: BadgeType) => {
    console.log(newBadge);

    const badgeListUpdated = [...badgeList, newBadge]
    setBadgeList(badgeListUpdated)
  }

  const badgeList: BadgeType[] = [
    {
      label: 'Figma',
      logo: 'figma',
      style: BadgeStyle.FOR_THE_BADGE,
      color: 'F24E1E'
    },
    {
      label: 'Instagram',
      logo: 'instagram',
      style: BadgeStyle.FOR_THE_BADGE,
      color: 'E4405F'
    },
    {
      label: 'linkedin',
      logo: 'linkedin',
      color: '0A66C2',
      style: BadgeStyle.FOR_THE_BADGE,

    },
    {
      label: 'email',
      logo: 'gmail',
      style: BadgeStyle.FOR_THE_BADGE,
      color: 'ea4335'
    },
    {
      label: 'html',
      logo: 'html5',
      style: BadgeStyle.FOR_THE_BADGE,
      color: 'E34F26'
    },
    {
      label: 'css',
      logo: 'css3',
      style: BadgeStyle.FOR_THE_BADGE,
      color: '1572B6'
    },

    {
      label: 'javascript',
      logo: 'javascript',
      style: BadgeStyle.FOR_THE_BADGE,
      color: 'F7DF1E',
      logoColor: '000000'
    },
    {
      label: 'sass',
      logo: 'sass',
      style: BadgeStyle.FOR_THE_BADGE,
      color: 'CC6699',
    },
    {
      label: 'git',
      logo: 'git',
      style: BadgeStyle.FOR_THE_BADGE,
      color: 'F05032',
    },
    {
      label: 'typescript',
      logo: 'typescript',
      style: BadgeStyle.FOR_THE_BADGE,
      color: '3178C6',
    },
  ]

  return (
    <>
      <Form handleNewItem={handleNewItem} />
      {
        badgeList.map((badge, index) => {
          return <Badge
            key={index}
            showUrl={true}
            badgeData={badge}
          />
        })
      }
    </>
  )
}

export default App
