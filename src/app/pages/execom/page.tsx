import Heading from "@/app/components/heading";
import PeopleCard from "@/app/components/peopleCard";
import RiseUpText from "@/app/components/risingtext";


export default function People() {
  const peoples = [
    {
      name: "Jayanthy V",
      position: "President",
      division: "HRCG / VSSC",
      contact: 9447248783,
      image: "/EC/Jayanthy_Venkat.jpg",
    },
    {
      name: "Dr. Mohan Kumar L",
      position: "Vice-President",
      division: "CPSG / VSSC",
      contact: 9446177376,
      image: "/EC/Mohan_Kumar.jpg",
    },
    {
      name: "N Venkatesh",
      position: "Vice-President",
      division: "SRQA / LPSC",
      contact: 9496007509,
      image: "/EC/Venkatesh.jpg",
    },
    {
      name: "Dr. Lakshmi VM",
      position: "Vice-President",
      division: "SPCG /VSSC",
      contact: 9446518472,
      image: "/EC/Lakshmi.jpg",
    },
    {
      name: "Nallaperumal AM",
      position: "General Secretary",
      division: "APD / VSSC",
      contact: 9447766075,
      image: "/EC/Nallaperumal_AM.jpg",
    },
    {
      name: "Vibhu Unnikrishnan",
      position: "Treasurer",
      division: "MPED / VSSC",
      contact: 9400748400,
      image: "/EC/Vibhu_Unnikrishnan.png",
    },
    {
      name: "Guruvayoorappan SBM",
      position: "Joint Secretaries",
      division: "PED / VSSC (VRC Area)",
      contact: 9447713786,
      image: "/EC/Guruvayurappan_SBM.jpg",
    },
    {
      name: "Vidya L",
      position: "Joint Secretaries",
      division: "HRCG / VSSC (70 Acre area)",
      contact: 9446507865,
      image: "/EC/unknown_female.jpg",
    },
    {
      name: "Arjun Raj M",
      position: "Joint Secretaries",
      division: "FCDD / VSSC (INSTEF Area)",
      contact: 9497893417,
      image: "/EC/Arjun_Raj_M.jpg",
    },
    {
      name: "Somanathan S",
      position: "Joint Secretaries",
      division: "QDSM / VSSC (RPP Area)",
      contact: 9020954296,
      image: "/EC/Somanathan_S.jpg",
    },
    {
      name: "Shunmugavel A",
      position: "Joint Secretaries",
      division: "QCG-MM / VSSC (RFF Area)",
      contact: 9249562486,
      image: "/EC/unknown.jpg",
    },
    {
      name: "Santhosh Babu S",
      position: "Joint Secretaries",
      division: "S200 / VSSC (TERLS Area)",
      contact: 9447903711,
      image: "/EC/unknown.jpg",
    },
    {
      name: "Senthilkumar E",
      position: "Joint Secretaries",
      division: "/ VSSC (VKC Area)",
      contact: 9895751102,
      image: "/EC/image1.jpeg",
    },
    {
      name: "Santhana Gopal",
      position: "Joint Secretaries",
      division: "S200 / VSSC (TERLS Area)",
      contact: 4712567243,
      image: "/EC/unknown.jpg",
    },
    {
      name: "Krishnakumar S",
      position: "Joint Secretaries",
      division: "/ LPSC (VMC Area)",
      contact: 9895539858,
      image: "/EC/Krishnakumar.jpg",
    },
    {
      name: "Premkrishnan MK",
      position: "Joint Secretaries",
      division: "/ IISU (VKC Area)",
      contact: 9446593067,
      image: "/EC/Premkrishnan.jpg",
    },
    {
      name: "Dr. P Ganesh",
      position: "Joint Secretaries",
      division: "/ IPRC (IPRC Area)",
      contact: 9746689201,
      image: "/EC/unknown.jpg",
    },
    {
      name: "Ashish Tomy",
      position: "Cultural Secretary",
      division: "/ VSSC (VMC Area)",
      contact: 8547248615,
      image: "/EC/Ashish_Tomy.jpg",
    },
  ];

  return (
    <section className="min-h-dvh w-screen p-6 md:p-12 lg:p-20 ">
      <RiseUpText>
        <Heading text1={"Executive"} text2="Commitee" />
      </RiseUpText>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {peoples.map((person, index) => (
          <PeopleCard key={index} {...person} />
        ))}
      </div>
    </section>
  );
}
