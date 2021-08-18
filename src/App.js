import CountrySelector from "./components/CountrySelector"
import HighLight from "./components/HighLight"
import Summary from "./components/Summary"
import { getCountries, getReportByCountry} from "./apis/index"
import {useEffect,useState} from 'react'


function App() {

  const [countries,setCountries]=useState([]);
  const [selectedCountryId,setSelectedCountryId]=useState('');
  const [report,setReport]=useState([]);
  
    useEffect(() => { // Lấy toàn bộ Country
      getCountries()
        .then(res => {
          setCountries(res.data);
          
          setSelectedCountryId('VN'); // gán selected mặc định combobox
        })
    }, []);

    const handlerOnchange = (e) => { // Sự kiện sau khi chọn Country
      setSelectedCountryId(e.target.value); // set id cho state SelectedCountryId
      console.log(selectedCountryId);
    }

    useEffect( () => { // call API getReportByCountry
      if(selectedCountryId !== '')
      {
        const country = countries.find( (country) => country.ISO2 === selectedCountryId);

        getReportByCountry(country.Slug)
          .then( res => {
            // res.data.pop(); //xóa dữ liệu cuối cùng
            setReport(res.data);
        });
      }
    },[ selectedCountryId, countries ])

  return (
    <div>
      <CountrySelector value={selectedCountryId} countries={countries} handlerOnchange  ={handlerOnchange} />
      <HighLight report={report} />
      <Summary report={report} />
    </div>
  )
}

export default App;
