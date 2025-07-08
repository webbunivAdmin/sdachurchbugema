"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MainNav } from "@/components/main-nav";
import AOS from "aos";
import "aos/dist/aos.css";

type Leader = {
  name: string;
  title: string;
  tab: string;
  img?: string;
};

const allLeaders: Leader[] = [
  /* elders */
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/test.jpg",
  },

  /* deaconary */
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },

  /* clerks */
  { name: "Mr. Hafashimana Samuel", title: "Head Clerk", tab: "CLERKS" },
  {
    name: "Eld. Moses Muhumuza",
    title: "Incharge of MemberShip",
    tab: "CLERKS",
  },
  { name: "Mrs. Betty Tenywa", title: "Incharge of Records", tab: "CLERKS" },

  /* treasury */
  { name: "Mr.Atuha Sanctus", title: "Treasurer", tab: "TREASURY" },
  { name: "Mr.steven Dusengimana", title: "Treasurer", tab: "TREASURY" },

  /* interest cordinator */
  {
    name: "Mr.Keith Tibenda",
    title: "Interest Cordinator",
    tab: "INTEREST CORDINATOR",
  },
  {
    name: "Mrs.Edith Migadde",
    title: "Interest Cordinator",
    tab: "INTEREST CORDINATOR",
  },

  /* sabbath school */
  {
    name: "Mrs.Nassanga Deborah",
    title: "Sabbath School Superintendent ",
    tab: "SABBATH SCHOOL",
  },
  {
    name: "Pr.Mayambala Stanley",
    title: "Asst Sabbath School Superintendent ",
    tab: "SABBATH SCHOOL",
  },

  /* personal ministries */
  {
    name: "Pr.Nsangabaganwa Theogene",
    title: "Head Personal Ministry ",
    tab: "PERSONAL MINISTRY",
  },
  {
    name: "Mr.George Mushana",
    title: "Asst Personal Ministry ",
    tab: "PERSONAL MINISTRY",
  },

  /* adventist men */
  {
    name: "Mr.Kanyerezi Richard",
    title: "Head Adventist Men",
    tab: "ADVENTIST MEN",
  },
  {
    name: "Mr.Kagame Douglas",
    title: "Asst Adventist Men",
    tab: "ADVENTIST MEN",
  },

  /* YOUTH MINISTRIES */
  {
    name: "Mr.Nsengiyunva Meshack",
    title: "Young Adults Leader",
    tab: "YOUTH MINISTRY",
  },
  {
    name: "Eld.Niyomugabo Francis",
    title: "PCM Leader ",
    tab: "YOUTH MINISTRY",
  },
  {
    name: "Mr.Barraka Tungaraza",
    title: "Ambassador-Director",
    tab: "YOUTH MINISTRY",
  },
  {
    name: "Mrs.Stella Adong",
    title: "Pathfinder-Director ",
    tab: "YOUTH MINISTRY",
  },
  {
    name: "Mr.Samuel Wakwatekwa",
    title: "Adventurer-Director",
    tab: "YOUTH MINISTRY",
  },

  /* children */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "CHILDREN MINISTRY" },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "CHILDREN MINISTRY",
  },
  {
    name: "Mr.Barraka Tungaraza",
    title: "Ambassador-Director",
    tab: "CHILDREN MINISTRY",
  },
  {
    name: "Mrs.Stella Adong",
    title: "Pathfinder-Director ",
    tab: "CHILDREN MINISTRY",
  },
  {
    name: "Mr.Samuel Wakwatekwa",
    title: "Adventurer-Director",
    tab: "CHILDREN MINISTRY",
  },
  {
    name: "Mr.Barraka Tungaraza",
    title: "Ambassador-Director",
    tab: "CHILDREN MINISTRY",
  },
  {
    name: "Mrs.Stella Adong",
    title: "Pathfinder-Director ",
    tab: "CHILDREN MINISTRY",
  },
  {
    name: "Mr.Samuel Wakwatekwa",
    title: "Adventurer-Director",
    tab: "CHILDREN MINISTRY",
  },

  /* women */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "WOMEN MINISTRY" },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "WOMEN MINISTRY",
  },

  /* COMMUNICATION */
  { name: "Mr.Seth Tibenda", title: "Director", tab: "COMMUNICATION" },

  /* education */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "EDUCATION" },
  { name: "Mrs.Doreen Kaweesi", title: "Asst Director ", tab: "EDUCATION" },

  /* FAMILY LIFE */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "FAMILY LIFE" },

  /* HEALTH */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "HEALTH MINISTRY" },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "HEALTH MINISTRY",
  },

  /* MUSIC */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "MUSIC" },
  { name: "Mrs.Doreen Kaweesi", title: "Asst Director ", tab: "MUSIC" },

  /* CHURCH CHOIR*/
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "CHURCH CHOIR" },

  /* PRISON MINISTRY */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "PRISON MINISTRY" },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "PRISON MINISTRY",
  },

  /* PUBLIC AFFAIRS AND RELIGIOUS LIBERTY */
  {
    name: "Mrs.Edrine Muhumuza",
    title: "Director",
    tab: "PUBLIC AFFAIRS AND RELIGIOUS LIBERTY",
  },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "PUBLIC AFFAIRS AND RELIGIOUS LIBERTY",
  },

  /* SOCIAL AND WELFARE */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "SOCIAL AND WELFARE" },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "SOCIAL AND WELFARE",
  },

  /* CUSTODIAN */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "CUSTODIAN" },
  { name: "Mrs.Doreen Kaweesi", title: "Asst Director ", tab: "CUSTODIAN" },

  /* STERWARDSHIP AND DEVELOPMENT */
  {
    name: "Mrs.Edrine Muhumuza",
    title: "Director",
    tab: "STERWARDSHIP AND DEVELOPMENT",
  },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "STERWARDSHIP AND DEVELOPMENT",
  },

  /* SHEPHERDESS */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "SHEPHERDESS" },

  /* POSSIBILITY MINISTRY */
  {
    name: "Mrs.Edrine Muhumuza",
    title: "Director",
    tab: "POSSIBILITY MINISTRY",
  },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "POSSIBILITY MINISTRY",
  },

  /* PIANISTS */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "PIANISTS" },
  { name: "Mrs.Doreen Kaweesi", title: "Asst Director ", tab: "PIANISTS" },
  { name: "Mrs.Doreen Kaweesi", title: "Asst Director ", tab: "PIANISTS" },

  /* COMPANY LEADERS */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "COMPANY LEADERS" },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "COMPANY LEADERS",
  },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "COMPANY LEADERS",
  },

  /* PUBLISHING MINISTRY */
  {
    name: "Mrs.Edrine Muhumuza",
    title: "Director",
    tab: "PUBLISHING MINISTRY",
  },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "PUBLISHING MINISTRY",
  },
];

const tabs = [
  "ELDERS",
  "DEACONARY",
  "CLERKS",
  "TREASURY",
  "INTEREST CORDINATOR",
  "SABBATH SCHOOL",
  "PERSONAL MINISTRY",
  "ADVENTIST MEN",
  "YOUTH MINISTRY",
  "CHILDREN MINISTRY",
  "WOMEN MINISTRY",
  "COMMUNICATION",
  "EDUCATION",
  "FAMILY LIFE",
  "HEALTH MINISTRY",
  "MUSIC",
  "CHURCH CHOIR",
  "PRISON MINISTRY",
  "PUBLIC AFFAIRS AND RELIGIOUS LIBERTY",
  "SOCIAL AND WELFARE",
  "CUSTODIAN",
  "STERWARDSHIP AND DEVELOPMENT",
  "SHEPHERDESS",
  "POSSIBILITY MINISTRY",
  "PIANISTS",
  "COMPANY LEADERS",
  "PUBLISHING MINISTRY",
];

export default function departmentsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredLeaders = allLeaders.filter(
    (leader) => leader.tab === activeTab
  );

  return (
    <main className="min-h-screen overflow-hidden pr-5 md:pr-20 bg-white text-gray-900">
      <MainNav />

      <div className="text-center my-6 pt-24">
        <div className="text-center my-10 pt-13">
          <div className="w-64 mx-auto aspect-rectangle overflow-hidden rounded-lg shadow-md bg-cyan-900 p-4">
            <img
              src="/test.jpg"
              alt="Test"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-cyan-900 mb-6">
          CHURCH LEADERSHIP
        </h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mt-6 border-b pb-3 bg-cyan-900 p-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium transition duration-200 px-3 py-1 rounded-md ${
                tab === activeTab
                  ? "border-b-2 border-white text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-4">
          {filteredLeaders.map((leader, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 rounded-lg shadow-md p-4"
              data-aos="fade-up"
            >
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                {leader.img ? (
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{leader.name}</h3>
              <p className="text-sm text-gray-600">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
