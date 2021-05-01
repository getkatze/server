import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Campaign } from "../generated/type-graphql";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Resolver()
export default class CryptoResolver {
    @Query(() => String)
    async chargeCrypto(@Arg("campaignId") campaignId: string, @Arg("userId") userId: string, @Arg("amount") amount: string) {
        const body = {
            campaignId,
            userId,
            amount
        }
        let charge = await fetch(process.env.CRYPTO_TRANSACTIONS_API!, {
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        }).then(res => res.json())
        return charge.hosted_url;
    }

    @Query(() => String)
    async updateInvoiceStatus(@Arg("campaignId") campaignId: string, @Arg("status") status: string) {
        return await prisma.campaign.update({
            where: {
                id: campaignId
            },
            data: {
                prizeAmountDeposited: status
            }
        })
    }
}