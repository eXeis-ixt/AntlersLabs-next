import React from 'react'
import { Icon } from './ui/evervault-card'


interface CardProps{
    title?: string
}

const Card = ({title}: CardProps) => {
  return (
    <div>

<div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative ">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

           <div>
                {title}
           </div>
          </div>

    </div>
  )
}

export default Card