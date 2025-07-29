export const Profile = () => {
    return(
        <>
        <div>
            <h1>Profile</h1>
        </div>
        <h1>Name : ATHARVA KAILAS KADAM</h1>
        <h1>Email : atharvakailaskadam@gmail.com</h1>
        <h1>Phone : 9324567890</h1>
            <div>
                <button>
                    ContactInfo
                </button>
            </div>
        </>
    )
}

function ProfileCard(props)
{
    const {name, email, phone} = props.data;
    return(
        <>
            <h1>Name : {name}</h1>
            <h1>Email : {email}</h1>
            <h1>Phone : {phone}</h1>
        </>
    )
}