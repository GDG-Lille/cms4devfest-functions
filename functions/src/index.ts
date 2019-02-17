import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import findAllActivePartners from './partners/functions/find-all-active-partners';
import makeBillingForPartner from './partners/functions/make-billing-for-partner';

admin.initializeApp();
admin.firestore().settings({ timestampsInSnapshots: true });

exports.findAllActivePartners = functions.https.onRequest(findAllActivePartners);
exports.makeBillingForPartner = functions.firestore.document('partners/{partnerId}').onCreate(makeBillingForPartner);
