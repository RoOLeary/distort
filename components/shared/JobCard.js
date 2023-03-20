const JobCard = ({ job }) => {

    // console.log(job.category);
    
    return(
        <div className="jobCard">
            <h4>{job.category}</h4>
            <h1 className="jobnCard title">{job.title}</h1>
            <p className="jobnCard location">{job.location}</p>
            
        </div>
    )

}

export default JobCard