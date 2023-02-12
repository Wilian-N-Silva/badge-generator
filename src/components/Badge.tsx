import { BadgeProp } from "../Global/Types"



export function Badge({ badgeData, showUrl }: BadgeProp) {

  /*
    label?: string;
    labelColor?: string;
    logo?: string;
    logoColor?: string;
    style?: string;
    color?: string;
  */

  const urlParams = {
    label: badgeData?.label || 'Label',
    // labelColor: `&labelColor=${badgeData?.labelColor?.replace('#', '') || '97ca00'}`,
    logo: `&logo=${badgeData?.logo}`,
    logoColor: `&logoColor=${badgeData?.logoColor?.replace('#', '') || 'ffffff'}`,
    style: badgeData?.style || 'plastic',
    color: badgeData?.color?.replace('#', '') || '97ca00',
  }

  const imageUrl = `https://img.shields.io/badge/${urlParams.label}-${urlParams.color}?style=${urlParams.style}${urlParams.logo}${urlParams.logoColor}`
  // const url = `https://img.shields.io/badge/${urlParams.label}-${urlParams.color}?style=${urlParams.style}&logo=${urlParams.logo}&logoColor=${urlParams.logoColor}`

  const imageComp = `![${urlParams.label.toUpperCase()}](${imageUrl})`;
  const completeUrl = `[![${urlParams.label.toUpperCase()}](${imageUrl} '${urlParams.label.toUpperCase()}')](URL)`
  return (
    <div>
      <img src={imageUrl} alt="" />
      <br />
      {
        showUrl && <input type={'text'} value={imageComp} />
      }
      <br />
      <br />
    </div>
  )
}