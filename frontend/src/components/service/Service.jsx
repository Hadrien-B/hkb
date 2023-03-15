import './_service.scss'
import React, { useState, useEffect } from 'react'

// Parses the JSON returned by a network request
const parseJSON = resp => (resp.json ? resp.json() : resp)

// Checks if a network request came back fine, and throws an error if not
const checkStatus = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp
  }

  return parseJSON(resp).then(resp => {
    throw resp
  })
}

const headers = { 'Content-Type': 'application/json' }

const Services = () => {
  const [error, setError] = useState(null)
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/api/services?populate=%2A', {
      headers,
      method: 'GET'
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setServices(data))
      .catch(error => setError(error))
  }, [])

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>
  }

  return (
    <div className="container ">
      <h1 className=" container services__title">Mes services</h1>
      <section className="container__services">
        <article className="services__item">
          {services.map(
            ({
              id,
              attributes: {
                description,
                title,
                icon: {
                  data: [
                    {
                      attributes: { url, name }
                    }
                  ]
                },
                icon
              }
            }) => (
              <div className="services__details" key={id}>
                <h2>{title}</h2>
                <div>{description}</div>
                <img src={url} alt={name} />
              </div>
            )
          )}
        </article>
      </section>
    </div>
  )
}
export default Services
