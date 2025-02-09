import { webhook } from "svix"
import User from "../models/User"


// API Controller Function to Manage Clerk User With Database
const clerkWebhooks = async (req, res) => {

     try {

          // Create a Svix instance with clerk Webhooks with clerk Webhook secret.
          const whook = new webhook(process.env.CLERK_WEBHOOK_SECRET)

          // Verifying Headers
          await whook.verify(JSON.stringify(req.body), {
               "svix-id": req.headers["svix-id"],
               "svix-timestamp": req.headers["svix-timestamp"],
               "svix-signature": req.headers["svix-signature"],
          })

          const { data, type } = req.body;

          // Switch cases for different Events
          switch (type) {

               case 'user.created': {

                    const userdata = {
                         _id: data.id,
                         email: data.email_addresses[0].email_address,
                         name: data.first_name + " " + data.last_name,
                         image: data.image_url,
                         resume: ''
                    }
                    await User.create(userdata)
                    res.json({})
                    break;

               }

               case 'user.updated': {

                    const userdata = {
                         email: data.email_addresses[0].email_address,
                         name: data.first_name + " " + data.last_name,
                         image: data.image_url,
                    }
                    await User.findByIdAndUpdate(data.id, userdata)
                    res.json({})
                    break;

               }

               case 'user.deleted': {

                    await User.findByIdAndDelete(data.id)
                    res.json({})
                    break;

               }

               default:
                    break;
          }

     } catch (e) {

          console.log("Clerk Error: " + e);
          res.json({ success: false, message: 'WebHooks Error' })

     }

}

export default clerkWebhooks;