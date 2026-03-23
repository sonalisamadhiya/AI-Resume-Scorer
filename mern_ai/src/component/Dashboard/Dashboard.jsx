
import styles from './Dashboard.module.css'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import { useState } from 'react';
import axios from '../../utils/axios';
import { useContext } from 'react';
import { AuthContext } from '../../utils/AuthContext';

const Dashboard = () => {
    const [uploadFiletext, setUploadFileText] = useState("Upload your resume");
    const [loading, setLoading] = useState(false);
    const [resumeFile, setResumeFile] = useState(null);
    const [jobDesc, setJobDesc] = useState("");

    const [result, setResult] = useState(null);

    const { userInfo } = useContext(AuthContext);

    const handleOnChangeFile = (e) => {
        setResumeFile(e.target.files[0]);
        setUploadFileText(e.target.files[0].name)
    }

    const handleUpload = async () => {
                           



    }

    return (
        <div className={styles.Dashboard}>
            <div className={styles.DashboardLeft}>
                <div className={styles.DashboardHeader}>
                    <div className={styles.DashboardHeaderTitle}>Smart Resume Screening</div>
                     <div className={styles.DashboardHeaderLargeTitle}>Resume Match Score</div>
                      
                </div>

                <div className={styles.alertInfo}>
                    <div>🔔Important Instruction</div>
                    <div className={styles.dashboardInstruction}>
                        <div>📄Please paste the complete job description in the "Job Description" </div>
                        <div>📎Only pdf format(.pdf) resumes are accepted</div>
                    </div>

                                       

                </div>

                <div className={styles.DashboardUploadResume}>
                    <div className={styles.DashboardResumeBlock}>Upload your Resume</div>
                </div>
                <div className ={styles.DashboardInputField}>
                    <label htmlFor='inputField' className= {styles.analyzeAIBtn}>Upload Resume</label>
                    <input type='file' accept="pdf" id='inputField' onChange={handleOnChangeFile}/>
                </div>

                <div className={styles.jobDesc}>
                    <textarea value={jobDesc} onChange={(e) => { setJobDesc(e.target.value) }} className={styles.textArea} placeholder='Paste Your Job Description' rows={10} cols={50} />
                    <div className={styles.AnalyzeBtn} onClick={handleUpload} >Analyze</div>
                </div>
            </div>

            <div className={styles.DashboardRight}>
                <div className={styles.DashboardRightTopCard}>
                    <div>Analyze With AI</div>

                    <img className={styles.profileImg} src={userInfo?.photoUrl} />

                    <h2>{userInfo?.name}</h2>
                </div>


                {
                    result && <div className={styles.DashboardRightTopCard}>
                        <div>Result</div>

                  
                    </div>
                }

                {
                    loading && <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={280} height={280} />
                }


            </div>

        </div>


    )
}

export default WithAuthHOC(Dashboard);