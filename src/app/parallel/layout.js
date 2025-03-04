"use client";

const checkUserRole = () => {
    return "user";
};

export default function ParallelLayout({ children, admin, user }) {

    const role = checkUserRole();

    return (
        <section>
            <h3>Parallel routes - layout</h3>
            { children }
            {
                role === "admin" 
                    ? admin 
                    : user
            }
        </section>
    )
}
   