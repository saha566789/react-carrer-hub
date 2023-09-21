import { MdLocationOn } from "react-icons/md";
import {AiOutlineDollar} from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job
    return (
        <div class="card-compact bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 border rounded-lg font-extrabold mr-4 border-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 border rounded-lg font-extrabold mr-4 border-[#7E90FE]">{job_type}</button>
          </div>
          <div className="mt-4 flex">
            <h2 className="flex mr-2"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
            <h2 className="flex mr-2"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>{salary}</h2>
          </div>
          <div class="card-actions">
            <Link to={`/job/${id}`}>
            <button class="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Job;