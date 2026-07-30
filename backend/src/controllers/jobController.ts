import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";


export async function getJobs(
  req: Request,
  res: Response
) {

  try {

    const search =
      req.query.search as string | undefined;


    const page =
      Number(req.query.page) || 1;


    const limit =
      Number(req.query.limit) || 12;


    const skip =
      (page - 1) * limit;



    const jobs = await prisma.job.findMany({

      skip,

      take: limit,


      ...(search && {

        where: {

          OR: [

            {
              title: {

                contains: search,

                mode: "insensitive"

              }
            },


            {
              company: {

                contains: search,

                mode: "insensitive"

              }
            }

          ]

        }

      }),


      orderBy: {

        createdAt: "desc"

      }

    });



    const total =
      await prisma.job.count({

        ...(search && {

          where: {

            OR: [

              {
                title: {

                  contains: search,

                  mode: "insensitive"

                }
              },


              {
                company: {

                  contains: search,

                  mode: "insensitive"

                }
              }

            ]

          }

        })

      });



    res.json({

      jobs,

      page,

      limit,

      total,

      totalPages: Math.ceil(total / limit)

    });



  } catch(error) {


    console.error(error);


    res.status(500).json({

      message: "Failed to fetch jobs"

    });


  }

}