enum SeasonType {
    Winter = 'winter',
    Spring = 'spring',
    Summer = 'summer',
    Autumn = 'autumn'
}
  
enum MonthType {
    January, February, March, April, May, June,
    July, August, September, October, November, December
}

enum BackgroundType {
    Light, Dark
}
 
export const SeasonClockModel = {
    SeasonType: SeasonType,
    MonthType: MonthType,
    BackgroundType: BackgroundType
}

