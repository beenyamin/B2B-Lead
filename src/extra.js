

    
    fetch('http://localhost:5000/newMessage', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(addNewMassage)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {  
                toast.success('Massage Send')
                navigate(location?.state ? location?.state : '/')
               
            }
        })