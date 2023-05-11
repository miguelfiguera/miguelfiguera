import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import {useRef,useEffect,useState} from 'react'


export default function Contact() {
  const myRef=useRef()
const [visible,setVisible]=useState('myHidden')

useEffect(()=>{
  const observer=new IntersectionObserver((entries)=>{
    const entry=entries[0]
    if(entry.isIntersecting){
    setVisible('myShow')}
    else{ setVisible('myHidden')}
  },{threshold:0.3})
  observer.observe(myRef.current)
},[])

    const [state, handleSubmit] = useForm("xlekveyv");
    if (state.succeeded) {
        return( 
        <div className="container mx-auto text-center py-5"> <strong><p className="fs-1 ">Thanks for Writing!</p></strong>
          <p className="fs-3">I'll answer as soon as possible.</p></div>
        );
    }


    return(

      <div ref={myRef} className={`container pt-5 pb-5 ${visible}`} id="contact">
        <h2 className="fs-1 text-center pb-3">Contact</h2>
        <form onSubmit={handleSubmit} style={{maxWidth:'450px'}} className="rounded-3 mx-auto">
          <div className="mb-3">
            <label for="full-name" className="form-label text-light">
              Nombre y apellido:
            </label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="Nombre completo"
              required="true"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">
              Dirección de correo:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="youremail@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-light">
              Mensaje:
            </label>
            <textarea id="message" name="message" className="form-control" placeholder="I think you're awesome!" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div class="modal-footer">
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-primary mt-2 me-3"
            >
              Enviar
            </button>
          </div>
        </form>
    </div>
    )
}
