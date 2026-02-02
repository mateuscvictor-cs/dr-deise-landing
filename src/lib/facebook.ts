import crypto from 'crypto'

type FacebookUserData = {
    em?: string // email
    ph?: string // phone
    fn?: string // first name
    ln?: string // last name
    ct?: string // city
    st?: string // state
    zp?: string // zip
    country?: string
    external_id?: string
    client_ip_address?: string
    client_user_agent?: string
    fbp?: string
    fbc?: string
}

type FacebookEventCustomData = {
    currency?: string
    value?: number
    content_name?: string
    content_category?: string
    content_ids?: string[]
    content_type?: string
    order_id?: string
    status?: string
}

type FacebookEvent = {
    event_name: string
    event_time: number
    event_id?: string
    user_data: FacebookUserData
    custom_data?: FacebookEventCustomData
    action_source: "website"
    event_source_url: string
}

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN

/**
 * SHA-256 Hash string for Facebook Normalization
 */
export function hashData(data: string): string {
    if (!data) return ""
    return crypto.createHash('sha256').update(data).digest('hex')
}

/**
 * Send Event to Facebook Conversions API
 */
export async function sendFacebookEvent(event: FacebookEvent) {
    if (!PIXEL_ID || !ACCESS_TOKEN) {
        console.warn("Facebook Pixel ID or Access Token not configured")
        return
    }

    try {
        const response = await fetch(
            `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: [event],
                    test_event_code: process.env.FACEBOOK_TEST_EVENT_CODE, // Optional: for testing in Events Manager
                }),
            }
        )

        if (!response.ok) {
            const errorData = await response.json()
            console.error('Facebook CAPI Error:', JSON.stringify(errorData, null, 2))
            return false
        }

        return true
    } catch (error) {
        console.error('Facebook CAPI Network Error:', error)
        return false
    }
}
