import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Reason from "../components/Reason";
import Service from "../components/Service";
import DoctorTeam from "../components/doctorTeam";
import FormReview from "../components/FormReview.js";
import News from "../components/News";
import Test from "../components/test";
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import TestForm from "../components/test";


const Index = () => (
    <Layout title="Trang Chủ">
        <Banner/>
        <Reason/>
        <Service/>
        <DoctorTeam/>
        {/* <FormReview/> */}
        <FormReview/>
        <News/>
    </Layout>
  );
  
Index.getInitialProps = async function() {
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();

console.log(`Show data fetched. Count: ${data.length}`);

return {
    shows: data.map(entry => entry.show)
    };
};
  
export default Index;
