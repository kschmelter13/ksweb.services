"use client";
import React from "react";
import { ValidationError, useForm } from "@formspree/react";

export default function Form() {
	const [state, handleSubmit] = useForm("mdordlrp");

	return (
		<div className="flex justify-center items-center">
			<div className="bg-white rounded-md w-full max-w-2xl">
				<form onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Name Input */}
						<div>
							<label className="block text-sm font-medium text-gray-600 mb-1">
								Name <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								name="name"
								required
								className="w-full px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
								placeholder="John Doe"
							/>
							<ValidationError field="name" errors={state.errors} />
						</div>

						{/* Email Input */}
						<div>
							<label className="block text-sm font-medium text-gray-600 mb-1">
								Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								name="email"
								required
								className="w-full px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
								placeholder="johndoe@example.com"
							/>
							<ValidationError field="email" errors={state.errors} />
						</div>

						{/* Phone Input */}
						<div>
							<label className="block text-sm font-medium text-gray-600 mb-1">
								Phone <span className="text-red-500">*</span>
							</label>
							<input
								type="tel"
								name="phone"
								required
								className="w-full px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
								placeholder="(123) 456-7890"
							/>
							<ValidationError field="phone" errors={state.errors} />
						</div>

						{/* Organization Input */}
						<div>
							<label className="block text-sm font-medium text-gray-600 mb-1">
								Organization
							</label>
							<input
								type="text"
								name="organization"
								className="w-full px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
								placeholder="Your Organization"
							/>
							<ValidationError field="organization" errors={state.errors} />
						</div>
					</div>

					{/* Message Textarea */}
					<div className="mt-6">
						<label className="block text-sm font-medium text-gray-600 mb-1">
							Message <span className="text-red-500">*</span>
						</label>
						<textarea
							rows={5}
							name="message"
							required
							className="w-full px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
							placeholder="Your message here..."
						/>
						<ValidationError field="message" errors={state.errors} />
					</div>

					<div className="mt-6">
						<button
							type="submit"
							disabled={state.submitting}
							className="w-full bg-[#1B5D1D] text-white py-2 rounded-md font-medium"
						>
							{state.succeeded ? "Thank you for your message!" : "Send message"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
