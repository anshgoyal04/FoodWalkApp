import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../components/SuccessModal";
import { supabase } from "../supabaseClient";

export default function BecomeGuidePage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        city: "",
        address: "",
        phone: "",
        instagram: "",
        youtube: "",
        gender: "",
        about: "",
        experience: "",
        speciality: "",
        walks_done: "",
    });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const payload = {
            name: form.name,
            email: form.email,
            city: form.city,
            address: form.address,
            phone: form.phone,
            instagram: form.instagram || null,
            youtube: form.youtube || null,
            gender: form.gender,
            about: form.about,
            speciality: form.speciality || null,
            walks_done: Number(form.walks_done),
            status: "pending",
        };

        const { error } = await supabase.from("guides").insert([payload]);

        if (error) {
            console.error("Insert failed:", error);
            return;
        }
        const { error: emailError } = await supabase.functions.invoke(
            "register-guide",
            {
                body: {
                    name: form.name,
                    email: form.email,
                    city: form.city,
                },
            }
        );

        if (emailError) {
            console.error("Email function failed:", emailError);
            // ❗ We do NOT block success modal because DB insert succeeded
        }

        setTimeout(() => {
            navigate("/");
        }, 5000);
        setShowSuccess(true);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!form.name) newErrors.name = "Name is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.city) newErrors.city = "City is required";
        if (!form.address) newErrors.address = "Meeting address is required";
        if (!form.phone) newErrors.phone = "Phone number is required";
        if (!form.gender) newErrors.gender = "Please select gender";

        if (!form.about || form.about.length < 30) {
            newErrors.about = "Please write at least 30 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // {showSuccess && (
    //   <SuccessModal
    //     onClose={() => {
    //       setShowSuccess(false);
    //       window.scrollTo({ top: 0, behavior: "smooth" });
    //     }}
    //   />
    // )}


    return (
        <>
            <div className="relative min-h-screen flex items-start justify-center py-20 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-white overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.60] pointer-events-none"
                    style={{
                        backgroundImage:
                            "url('https://www.transparenttextures.com/patterns/food.png')",
                        backgroundRepeat: "repeat",
                    }}
                />
                {/* Soft gradient blobs */}

                <div className="relative animate-fadeIn  z-10 w-full max-w-3xl bg-[#fffdf9] border border-orange-100 rounded-xl shadow-xl p-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-3 text-orange-600">
                        Join as a Local Food Experience Creator
                    </h1>

                    <p className="text-center text-gray-600 mb-10">
                        Create memorable food walks and connect with travelers from around the world
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-10"
                    >
                        {/* PERSONAL INFO */}
                        <div>
                            <h2 className="text-xl font-semibold text-orange-600 mb-4">
                                Personal Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="form-label required">Full Name</label>

                                    <input
                                        name="name"
                                        placeholder="Enter your full name"
                                        onChange={handleChange}
                                        className={`form-input ${errors.name ? "border-red-500 ring-1 ring-red-400" : ""
                                            }`}
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="form-label required">Email (Gmail preferred)</label>

                                    <input
                                        type="email"
                                        name="email"
                                        className={`form-input ${errors.email ? "border-red-500 ring-1 ring-red-400" : ""
                                            }`}
                                        placeholder="you@gmail.com"
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="form-label required">City</label>

                                    <input
                                        name="city"
                                        className={`form-input ${errors.city ? "border-red-500 ring-1 ring-red-400" : ""
                                            }`}
                                        placeholder="Your operating city"
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.city && (
                                        <p className="text-sm text-red-500 mt-1">{errors.city}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="form-label required">Meeting Address</label>
                                    <input
                                        name="address"
                                        className={`form-input ${errors.address ? "border-red-500 ring-1 ring-red-400" : ""
                                            }`}
                                        placeholder="Where should tourists meet you?"
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.address && (
                                        <p className="text-sm text-red-500 mt-1">{errors.address}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h2 className="text-xl font-semibold text-orange-600 mb-4">
                                Contact & Social Presence
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="form-label required">WhatsApp / Phone Number</label>
                                    <input
                                        name="phone"
                                        className={`form-input ${errors.phone ? "border-red-500 ring-1 ring-red-400" : ""
                                            }`}
                                        placeholder="+91 98765 43210"
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.phone && (
                                        <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="form-label required">Gender</label>
                                    <select
                                        name="gender"
                                        className={`form-input ${errors.gender ? "border-red-500 ring-1 ring-red-400" : ""
                                            }`}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                    {errors.gender && (
                                        <p className="text-sm text-red-500 mt-1">{errors.gender}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="form-label required">Instagram Profile</label>
                                    <input
                                        name="instagram"
                                        className={`form-input ${errors.instagram ? "border-red-500 ring-1 ring-red-400" : ""
                                            }`}
                                        placeholder="https://instagram.com/yourprofile"
                                        onChange={handleChange}
                                    />
                                    {errors.instagram && (
                                        <p className="text-sm text-red-500 mt-1">{errors.instagram}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="form-label">YouTube Channel</label>
                                    <input
                                        name="youtube"
                                        className="form-input"
                                        placeholder="https://youtube.com/yourchannel"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* EXPERIENCE */}
                        <div>
                            <h2 className="text-xl font-semibold text-orange-600 mb-4">
                                Experience & Expertise
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="form-label required">Number of Food Walks Completed</label>
                                    <input
                                        type="number"
                                        name="walks_done"
                                        placeholder="e.g. 25"
                                        onChange={handleChange}
                                        className={`form-input ${errors.walks_done ? "border-red-500 ring-1 ring-red-400" : ""
                                            }`}
                                    />
                                    {errors.walks_done && (
                                        <p className="text-sm text-red-500 mt-1">{errors.walks_done}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="form-label">Speciality Area</label>
                                    <input
                                        name="speciality"
                                        className="form-input"
                                        placeholder="Street food, cafés, heritage food..."
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="form-label required">About You</label>
                                <textarea
                                    name="about"
                                    rows="4"
                                    placeholder="Tell us about yourself and what makes your food walk special"
                                    onChange={handleChange}
                                    className={`form-input ${errors.about ? "border-red-500 ring-1 ring-red-400" : ""
                                        }`}
                                />
                                {errors.about && (
                                    <p className="text-sm text-red-500 mt-1">{errors.about}</p>
                                )}
                            </div>
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:opacity-90 transition"
                        >
                            Submit Registration
                        </button>
                    </form>
                </div>
            </div>
            {showSuccess && (
                <SuccessModal
                    onGoHome={() => {
                        setShowSuccess(false);
                        navigate("/");
                    }}
                />
            )}
        </>
    );
}
