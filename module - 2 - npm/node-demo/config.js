import "dotenv/config"

export const config = {
    environment: process.env.ENVIRONMENT,
    baseUrl: process.env.BASE_URL,
    studentName: process.env.STUDENT_NAME,
    course: process.env.COURSE
}