import { EmailAttachment } from 'services/email/email-service';
import { Request } from 'express';
import {
    KEY_ADDRESS_1, KEY_ADDRESS_2,
    KEY_CITY, KEY_COUNTRY,
    KEY_FULL_NAME,
    KEY_LEGAL_PHOTO_ID_PATH,
    KEY_PERSONAL_PICTURE_HOLDING_ID_PATH,
    KEY_PROOF_OF_RESIDENCE_PATH,
    KEY_TOKEN_RECIPIENT_ADDRESS,
    KEY_STATE,
    KEY_ZIP,
    KEY_PRODUCT_ID
} from 'utilities/validators';

const emailCreds = require('../emailCreds.json');

export const kycTemplate = (req: Request): EmailAttachment => {

    const email: EmailAttachment = {
        from: emailCreds.kycEmail.user,
        to: process.env.KYC_EMAILS,
        subject: `KYC Form for ${req.body[KEY_FULL_NAME]}`,
        html: `<p>Name: ${req.body[KEY_FULL_NAME]}</p>
						<p>Address 1: ${req.body[KEY_ADDRESS_1]}</p>
						<p>Address 2: ${req.body[KEY_ADDRESS_2]}</p>
						<p>City: ${req.body[KEY_CITY]}</p>
						<p>State/Province/Region: ${req.body[KEY_STATE]}</p>
						<p>ZIP/Postal Code: ${req.body[KEY_ZIP]}</p>
						<p>Country: ${req.body[KEY_COUNTRY]}</p>
						<p>Token Recipient Address: ${req.body[KEY_TOKEN_RECIPIENT_ADDRESS]}</p>
						<p>Product ID: ${req.body[KEY_PRODUCT_ID]}</p>
				`,
        attachments: [
            {
                filename: 'legalPhotoId.png',
                path: req.body[KEY_LEGAL_PHOTO_ID_PATH].path,
                cid: 'legalPhotoId@onezerobinary.com'
            },
            {
                filename: 'personalPicture.png',
                path: req.body[KEY_PERSONAL_PICTURE_HOLDING_ID_PATH].path,
                cid: 'personalPicture@onezerobinary.com'
            },
            {
                filename: 'proofResidence.png',
                path: req.body[KEY_PROOF_OF_RESIDENCE_PATH].path,
                cid: 'proofResidence@onezerobinary.com'
            }
        ]
    };

    return email;
};
