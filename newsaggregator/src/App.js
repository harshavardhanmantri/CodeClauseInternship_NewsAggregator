import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
function App() {
  const [news, setNews] = useState([]);
  const [news1, setNews1] = useState([]);
  const [news2, setNews2] = useState([]);

  const [valid, setValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [isNews, setIsNews] = useState(false);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   async function getdata1() {
  //     try {
  //       // const res = await fetch(
  //       //   " https://newsapi.org/v2/top-headlines/sources?apiKey=72187a1548a44de49d4bbe54d9491d13",
  //       //   {
  //       //     signal: controller.signal,
  //       //   }
  //       // );
  //       // const data = await res.json();
  //       // if (data.res === "False") {
  //       //   throw new Error(data.Error);
  //       // }
  //       const data2 = {
  //         status: "ok",
  //         sources: [
  //           {
  //             id: "abc-news",
  //             name: "ABC News",
  //             description:
  //               "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
  //             url: "https://abcnews.go.com",
  //             category: "general",
  //             language: "en",
  //             country: "us",
  //           },
  //           {
  //             id: "abc-news-au",
  //             name: "ABC News (AU)",
  //             description:
  //               "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
  //             url: "https://www.abc.net.au/news",
  //             category: "sports",
  //             language: "en",
  //             country: "au",
  //           },
  //           {
  //             id: "aftenposten",
  //             name: "Aftenposten",
  //             description:
  //               "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
  //             url: "https://www.aftenposten.no",
  //             category: "politics",
  //             language: "no",
  //             country: "no",
  //           },
  //           {
  //             id: "al-jazeera-english",
  //             name: "Al Jazeera English",
  //             description:
  //               "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
  //             url: "https://www.aljazeera.com",
  //             category: "world",
  //             language: "en",
  //             country: "us",
  //           },
  //           {
  //             id: "ansa",
  //             name: "ANSA.it",
  //             description:
  //               "Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.",
  //             url: "https://www.ansa.it",
  //             category: "general",
  //             language: "it",
  //             country: "it",
  //           },
  //         ],
  //       };
  //       setNews1(() => setNews1(data2.sources));
  //       console.log("jo");
  //       console.log(data2);
  //       console.log(news1);

  //       setValid(false);
  //     } catch (err) {
  //       if (err.name !== "AbortError") {
  //         setErrorMsg(err.message);
  //       }
  //     }
  //   }
  //   getdata1();

  //   return function () {
  //     controller.abort();
  //   };
  // }, []);
  useEffect(() => {
    const controller = new AbortController();
    async function getdata() {
      try {
        const res = await fetch(
          " https://newsapi.org/v2/top-headlines/sources?apiKey=b5de399dc35c4910b6365836a1a684a3",
          {
            signal: controller.signal,
          }
        );
        const data = await res.json();
        if (data.res === "False") {
          throw new Error(data.Error);
        }
        // const data1 = {
        //   status: "ok",
        //   sources: [
        //     {
        //       id: "abc-news",
        //       name: "ABC News",
        //       description:
        //         "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
        //       url: "https://abcnews.go.com",
        //       category: "general",
        //       language: "en",
        //       country: "us",
        //     },
        //     {
        //       id: "abc-news-au",
        //       name: "ABC News (AU)",
        //       description:
        //         "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        //       url: "https://www.abc.net.au/news",
        //       category: "sports",
        //       language: "en",
        //       country: "au",
        //     },
        //     {
        //       id: "aftenposten",
        //       name: "Aftenposten",
        //       description:
        //         "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
        //       url: "https://www.aftenposten.no",
        //       category: "politics",
        //       language: "no",
        //       country: "no",
        //     },
        //     {
        //       id: "al-jazeera-english",
        //       name: "Al Jazeera English",
        //       description:
        //         "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
        //       url: "https://www.aljazeera.com",
        //       category: "world",
        //       language: "en",
        //       country: "us",
        //     },
        //     {
        //       id: "ansa",
        //       name: "ANSA.it",
        //       description:
        //         "Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.",
        //       url: "https://www.ansa.it",
        //       category: "general",
        //       language: "it",
        //       country: "it",
        //     },
        //   ],
        // };
        setNews(data);
        setNews2(() => setNews2(data.sources));
        setValid(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          setErrorMsg(err.message);
        }
      }
    }
    getdata();

    return function () {
      controller.abort();
    };
  }, []);
  useEffect(() => {
    function getcategories() {
      const cats = news?.sources?.map((arr1) => arr1.category);
      const cate = cats?.filter((arr2, i) => cats?.indexOf(arr2) === i);
      console.log(cate);
      setCategory(cate);
    }
    getcategories();
  }, [news]);
  useEffect(() => {
    console.log("hi");
    console.log(news2);
    const newnews = news2.filter((news1) =>
      news1?.category?.includes(selectCategory)
    );
    setNews1(newnews);
  }, [selectCategory]);
  function handleClick(categories) {
    setIsNews(true);
    console.log(categories);
    setSelectCategory(() => setSelectCategory(categories));
  }
  function handleClick2() {
    setIsNews(false);
  }
  console.log(news);

  return (
    <div className="App">
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css"
        integrity="sha384-nU14brUcp6StFntEOOEBvcJm4huWjB0OcIeQ3fltAfSmuZFrkAif0T+UtNGlKKQv"
        crossorigin="anonymous"
      />

      {valid && <div>Loading ...</div>}
      {!valid && !errorMsg && (
        <div className="container my-3">
          <h1>News Aggregator</h1>
          <span>
            <span onClick={() => handleClick2()} className="category-span">
              ALL
            </span>
            {category?.map((categories, i) => (
              <span
                onClick={() => handleClick(categories)}
                className="category-span"
                key={i}
              >
                {categories}
              </span>
            ))}
          </span>
          <hr />
          <div className="row">
            {!isNews &&
              news?.sources?.map((arr) => (
                <div className="col-md-4" key={arr.id}>
                  <Card url={arr.url} desc={arr.description} name={arr.name} />
                </div>
              ))}
            {isNews &&
              news1?.map((arr) => (
                <div className="col-md-4" key={arr.id}>
                  <Card url={arr.url} desc={arr.description} name={arr.name} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
