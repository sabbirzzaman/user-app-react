import './App.css';

function App() {
    const handleUserData = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        // create user object
        const user = { name, email };

        // post data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              e.target.reset()
            });
    };

    return (
        <div
            className="container my-5 bg-white py-4 px-5 rounded-3 shadow"
            style={{ maxWidth: '600px' }}
        >
            <form onSubmit={handleUserData}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Your name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter name"
                        id="name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        id="email"
                    />
                </div>
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Add Data"
                />
            </form>
        </div>
    );
}

export default App;
