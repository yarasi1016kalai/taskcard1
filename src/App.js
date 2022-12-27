

import Card from "./components/Card";

function App() {

  let plans =[
    {
      plan:"Free",
      price:0,
      User:"Single User",
      UserEnabler:true,
      Storage:"5GB storage",
      StorageEnabler:true,
      publicprojects:"unlimited publicproject",
      publicprojectsEnabler:true,
      communityAccess:"community Acess",
      communityAccessEnabler:true,
      privateProject:"unlimted privateprojects",
      privateProjectEnabler:false,
      phonesupport:"Dedicated phone support",
      phonesupportEnabler:false,
      subDomain:"Free subDomain",
      subDomainEnabler:false,
      reports:" Monthly status Reports",
      reportsEnabler:false,

    },
    {
      plan:"PLUS",
      price:9,
      User:"5 Users",
      UserEnabler:true,
      Storage:"50GB storage",
      StorageEnabler:true,
      publicprojects:"unlimited publicproject",
      publicprojectsEnabler:true,
      communityAccess:"community Acess",
      communityAccessEnabler:true,
      privateProject:"unlimted privateprojects",
      privateProjectEnabler:true,
      phonesupport:"Dedicated phone support",
      phonesupportEnabler:true,
      subDomain:"Free subDomain",
      subDomainEnabler:true,
      reports:" Monthly status Reports",
      reportsEnabler:false,
    },
    {
      plan:"PRO",
      price:49,
      User:"Unlimited Users",
      UserEnabler:true,
      Storage:"150GB storage",
      StorageEnabler:true,
      publicprojects:"unlimited publicproject",
      publicprojectsEnabler:true,
      communityAccess:"community Acess",
      communityAccessEnabler:true,
      privateProject:"unlimted privateprojects",
      privateProjectEnabler:true,
      phonesupport:"Dedicated phone support",
      phonesupportEnabler:true,
      subDomain:"Unlimited Free subDomain",
      subDomainEnabler:true,
      reports:" Monthly status Reports",
      reportsEnabler:true,

    },
   
  ]
  return <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      <Card toys={plans[0]}></Card>
      <Card toys={plans[1]}></Card>
      <Card toys={plans [2]}></Card>
      </div>
    </div>
  </section>
  </>     
}

export default App;
