const { PrismaClient } = require("@prisma/client"); // Defaulting to standard client
const env = require("./env.config");

class DatabaseService {
    static instance;

    static async getInstance() {
        if (!this.instance) {
            this.instance = new PrismaClient({
                accelerateUrl: env.DATABASE_URL
            });

            try {
                await this.instance.$connect();
                console.log("Database connection established successfully");
            } catch (error) {
                console.error("Failed to connect to database:", error);
                throw error;
            }
        }
        return this.instance;
    }

    static async disconnect() {
        if (this.instance) {
            await this.instance.$disconnect();
            console.log("Database connection closed");
        }
    }
}

module.exports = {
    db: DatabaseService
};