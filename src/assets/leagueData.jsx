import br2010 from "./brasileiro/2010.json";
import br2011 from "./brasileiro/2011.json";
import br2012 from "./brasileiro/2012.json";
import br2013 from "./brasileiro/2013.json";
import br2014 from "./brasileiro/2014.json";
import br2015 from "./brasileiro/2015.json";
import br2016 from "./brasileiro/2016.json";
import br2017 from "./brasileiro/2017.json";
import br2018 from "./brasileiro/2018.json";
import br2019 from "./brasileiro/2019.json";
import br2020 from "./brasileiro/2020.json";
import br2021 from "./brasileiro/2021.json";
import br2022 from "./brasileiro/2022.json";
import br2023 from "./brasileiro/2023.json";
import br2024 from "./brasileiro/2024.json";
import pl2010 from "./premier-league/2010.json";
import pl2011 from "./premier-league/2011.json";
import pl2012 from "./premier-league/2012.json";
import pl2013 from "./premier-league/2013.json";
import pl2014 from "./premier-league/2014.json";
import pl2015 from "./premier-league/2015.json";
import pl2016 from "./premier-league/2016.json";
import pl2017 from "./premier-league/2017.json";
import pl2018 from "./premier-league/2018.json";
import pl2019 from "./premier-league/2019.json";
import pl2020 from "./premier-league/2020.json";
import pl2021 from "./premier-league/2021.json";
import pl2022 from "./premier-league/2022.json";
import pl2023 from "./premier-league/2023.json";
import pl2024 from "./premier-league/2024.json";
import laliga2010 from "./la-liga/2010.json";
import laliga2011 from "./la-liga/2011.json";
import laliga2012 from "./la-liga/2012.json";
import laliga2013 from "./la-liga/2013.json";
import laliga2014 from "./la-liga/2014.json";
import laliga2015 from "./la-liga/2015.json";
import laliga2016 from "./la-liga/2016.json";
import laliga2017 from "./la-liga/2017.json";
import laliga2018 from "./la-liga/2018.json";
import laliga2019 from "./la-liga/2019.json";
import laliga2020 from "./la-liga/2020.json";
import laliga2021 from "./la-liga/2021.json";
import laliga2022 from "./la-liga/2022.json";
import laliga2023 from "./la-liga/2023.json";
import laliga2024 from "./la-liga/2024.json";

const brasileiroTemporadas = [
  br2010,
  br2011,
  br2012,
  br2013,
  br2014,
  br2015,
  br2016,
  br2017,
  br2018,
  br2019,
  br2020,
  br2021,
  br2022,
  br2023,
  br2024,
];
const premierLeagueTemporadas = [
  pl2010,
  pl2011,
  pl2012,
  pl2013,
  pl2014,
  pl2015,
  pl2016,
  pl2017,
  pl2018,
  pl2019,
  pl2020,
  pl2021,
  pl2022,
  pl2023,
];
const laLigaTemporadas = [
  laliga2010,
  laliga2011,
  laliga2012,
  laliga2013,
  laliga2014,
  laliga2015,
  laliga2016,
  laliga2017,
  laliga2018,
  laliga2019,
  laliga2020,
  laliga2021,
  laliga2022,
  laliga2023,
];

export const ligas = {
  brasileiro: brasileiroTemporadas.reverse(),
  premierLeague: premierLeagueTemporadas.reverse(),
  laLiga: laLigaTemporadas.reverse()
};