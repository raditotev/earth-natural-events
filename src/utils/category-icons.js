import {FaThermometerHalf} from 'react-icons/fa'
import {GiEruption} from 'react-icons/gi'
import {GiTumbleweed} from 'react-icons/gi'
import {GiDustCloud} from 'react-icons/gi'
import {GiFallingRocks} from 'react-icons/gi'
import {GiBulldozer} from 'react-icons/gi'
import {GiIceberg} from 'react-icons/gi'
import {GiSnowflake2} from 'react-icons/gi'
import {ImFire} from 'react-icons/im'
import {RiEarthquakeFill} from 'react-icons/ri'
import {RiFloodFill} from 'react-icons/ri'
import {RiTyphoonFill} from 'react-icons/ri'
import {BsDropletHalf} from 'react-icons/bs'

export const categoryIcons = {
  drought: <GiTumbleweed />,
  dustHaze: <GiDustCloud />,
  earthquakes: <RiEarthquakeFill />,
  floods: <RiFloodFill />,
  landslides: <GiFallingRocks />,
  manmade: <GiBulldozer />,
  seaLakeIce: <GiIceberg />,
  severeStorms: <RiTyphoonFill />,
  snow: <GiSnowflake2 />,
  tempExtremes: <FaThermometerHalf />,
  volcanoes: <GiEruption />,
  waterColor: <BsDropletHalf />,
  wildfires: <ImFire />,
}
