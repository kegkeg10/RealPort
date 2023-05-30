import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { useForm } from "react-hook-form";

export const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
          e.preventDefault();
        }
      };
    

return (
        <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
            <Col md={6}>
                <img src={contactImg} alt="Contact" />
            </Col>
            <Col md={6}>
                <form 
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/nickg13csg@gmail.com"
                    method="POST"
                >
                    <input
                        className="submitFormC"
                        type="text"
                        placeholder="NAME"
                        {...register('name', {
                            required: true,
                            maxLength: 15,
                        })}
                    />
                    {errors.name && (
                        <p className="text-red mt-1">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max length is 100 char."}
                        </p>
                    )}
                    <input
                        className="submitFormC"
                        type="text"
                        placeholder="EMAIL"
                        {...register('name', {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email && (
                        <p className="text-red mt-1">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}
                        <textarea
                            name="message"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                            {errors.message && (
                                <p className="text-red mt-1">
                                    {errors.message.type === "required" &&
                                    "This field is required."}
                                    {errors.message.type === "maxLength" &&
                                    "Max length is 2000 char."}
                                </p>
                            )}
                            <button
                            type="submit"
                            >
                            SEND ME A MESSAGE
                            </button>
                    {/* Error place Holder */}
                </form>
            </Col>
            </Row>
        </Container>
        </section>
    );
};
