import {FC, useMemo} from 'react'
import {IEpisode, IFilm} from '@/types/film'
import {combineStyles} from '@/utils/combineStyles'
import {fileUrl} from '@/utils/helper'
import cn from 'classnames'
import styles from './episode.module.scss'

interface EpisodeProps {
  episode: IEpisode
  count: number
  film: IFilm
  className?: string
  classes?: any
}

export const Episode: FC<EpisodeProps> = ({episode, count, film, className, classes}) => {

  const s = useMemo(() => combineStyles(styles, classes), [classes])

  return <>
    <div className={cn(s.episode, className)}>
      <div className={s.image}>
        <img src={`/assets/${episode.preview}`} alt={episode.name}/>
      </div>
      <div className={s.content}>
        <span className={s.count}>{count}</span>
        <div>
          <h3 className={s.title}>{episode.name}</h3>
          <span className={s.timing}>{episode.timing}</span>
        </div>
      </div>
    </div>
  </>
}