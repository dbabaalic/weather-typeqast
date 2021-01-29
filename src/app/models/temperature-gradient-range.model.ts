export const colorPatterns: TemperatureColorPattern[] = [
  {
    temperatureRange: { minTemperature: -50, maxTemperature: -40 },
    color: { min: '#102F7E 0%', average: '#0C8DD6 12.5%', max: '#1AA0EC 25%' }
  },
  {
    temperatureRange: { minTemperature: -40, maxTemperature: -30 },
    color: { min: '#0C8DD6 12.5%', average: '#1AA0EC 25%', max: '#60C6FF 37.5%' }
  },
  {
    temperatureRange: { minTemperature: -30, maxTemperature: -20 },
    color: { min: '#1AA0EC 25%', average: '#60C6FF 37.5%', max: '#9BDBFF 50%' }
  },
  {
    temperatureRange: { minTemperature: -20, maxTemperature: -10 },
    color: { min: '#60C6FF 37.5%', average: '#9BDBFF 50%', max:  '#B4DEDA 62.5%' }
  },
  {
    temperatureRange: { minTemperature: -10, maxTemperature: 0 },
    color: { min: '#9BDBFF 50%', average: '#B4DEDA 62.5%', max: '#FFD66B 75%' }
  },
  {
    temperatureRange: { minTemperature: 0, maxTemperature: 20 },
    color: { min: '#B4DEDA 62.5%', average: '#FFD66B 75%', max: '#FFC178 87.5%' }
  },
  {
    temperatureRange: { minTemperature: 20, maxTemperature: 40 },
    color: { min: '#FFD66B 75%', average: '#FFC178 87.5%', max: '#FE9255 100%' }
  }
]

export interface TemperatureColorPattern {
  temperatureRange: TemperatureRange;
  color: GradientColorPattern;
}

export interface TemperatureRange {
  minTemperature: number;
  maxTemperature: number;
}

export interface GradientColorPattern {
  min: string;
  average: string;
  max: string;
}