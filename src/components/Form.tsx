import { useEffect, useState } from "react";
import { BadgeStyle, BadgeType } from "../Global/Types";
import { Badge } from "./Badge";

interface FormProp {
  handleNewItem: (badge: BadgeType) => void
}

export function Form(prop: FormProp) {

  const [newBadge, setNewBadge] = useState<BadgeType>()

  const handleLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewBadge(prevState => ({ ...prevState, label: value }))
  }
  const handleLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewBadge(prevState => ({ ...prevState, logo: value }))
  }

  const handleBadgeStyle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setNewBadge(prevState => ({ ...prevState, style: value }))
  }

  const handleLabelColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewBadge(prevState => ({ ...prevState, labelColor: value }))
  }
  const handleLogoColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewBadge(prevState => ({ ...prevState, logoColor: value }))
  }
  const handleBgColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewBadge(prevState => ({ ...prevState, color: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    prop.handleNewItem(newBadge!)
  }


  useEffect(() => { }, [newBadge])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="badge-label">Label</label>
        <input type="text" id="badge-label" onChange={handleLabel} value={newBadge?.label || ''} />
        <br />

        {/* <label htmlFor="badge-label-color">Label Color</label>
        <input type="color" id="badge-label-color" onChange={handleLabelColor} value={newBadge?.labelColor || '#ffffff'} />
        <br /> */}

        <label htmlFor="badge-logo">Logo</label>
        <input type="text" id="badge-logo" onChange={handleLogo} value={newBadge?.logo || ''} />
        <br />

        <label htmlFor="badge-logo-color">Logo Color</label>
        <input type="color" id="badge-logo-color" onChange={handleLogoColor} value={newBadge?.logoColor || '#ffffff'} />
        <br />

        <label htmlFor="badge-type">Type</label>
        <select name="" id="badge-type" onChange={handleBadgeStyle}>
          {
            Object.values(BadgeStyle).map((value, index) => {
              return <option
                key={`option_${index}`}
                value={value}
              >
                {value.replaceAll('-', ' ').toUpperCase()}
              </option>
            })
          }
        </select>
        <br />
        <label htmlFor="badge-background-color">Background Color</label>
        <input type="color" id="badge-background-color" onChange={handleBgColor} value={newBadge?.color || '#97ca00'} />
        <br />

        <button type="submit">Salvar</button>

      </form>
      <div className="preview">
        <Badge badgeData={newBadge} showUrl={false} />
      </div>
    </>
  )
}