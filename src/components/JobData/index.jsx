import data from '../data.json'
import styles from './index.module.css'

import { useState } from 'react'

const Search=()=>{

    const [value,setValue]=useState("")

    const handleChange=(e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }

    return(
        <>
        <div>
            Search
            <input type="text" onChange={handleChange}/>
        </div>
        {
            data.filter((job)=>{
                    if(!value || job.title.toLowerCase().includes(value.toLowerCase())) {
                        return job
                    }

            
                }
            ).map((job)=>{
                    return(
                        <div className={styles.whole} key={job.id}>

                            <h2 className={styles.align}>
                                <span className={styles.text}>
                                    Title:
                                </span>
                                
                                {job.title}
                            </h2>

                            <h2 className={styles.align}>
                                <span className={styles.text}>
                                    Location:
                                </span>

                                {job.location}
                            </h2>

                            <div className={styles.align}>
                                <span className={styles.text}>
                                    Description
                                </span> 
                                {job.description}
                            </div>

                            <div className={styles.align}>
                                <span className={styles.text}>
                                    Requirements
                                </span>
                                {job.requirements}
                            </div>
                        </div>
                    )
            })
        }
        </>
    )
}

export default Search