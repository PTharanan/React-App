import styles from './Course.module.css';

function Course(props) {

    if (props.show == true) {
        return (
            <>

                <div className={styles.card}>
                    <img src={props.img} alt="course_thamnail" />
                    <h2>{props.name}</h2>
                    <p>$ {props.price}</p>
                    <p>{props.point}/10</p>
                </div>
            </>
        );
    }

    else{
        return(
              <div className={styles.card}>
                    <p className={styles.p}>Error</p>
                </div>
        );
    }
}

export default Course;