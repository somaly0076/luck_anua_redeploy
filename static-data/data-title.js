'use strict';
// static header data for faqs page..
const textHeaderArray = [
    'Order',
    'Shipping',
    'Return & Exchange',
    'Account',
    'Product',
    'Royalty & Rewards',
    'Payment & Refund',    
]

// static src data for faqs page..
const srcArray = [
    "./assets/img/faqs/9026684_package_thin_icon.svg",
    "./assets/img/faqs/1954201_car_shipping_truck_icon.svg",
    "./assets/img/faqs/172536_reload_icon.svg",
    "./assets/img/faqs/7853767_kashifarif_user_profile_person_account_icon.svg",
    "./assets/img/faqs/9025722_info_icon.svg",
    "./assets/img/faqs/2849817_favorite_star_favorites_favourite_multimedia_icon.svg",
    "./assets/img/faqs/290142_business_card_cash_credit_money_icon.svg",
]

// static question and submenu data for faqs page
const cusTitleBodyArr = [
    ["Q. How can I cancel an order?", [
        "As long as your order status is “UNFULFILLED”, the order can be canceled from your end before 07:59 a.m. (PST) of the next day. As long as your order status is “UNFULFILLED”, the order can be canceled from your end before 07:59 a.m. (PST) of the next day.", 
        "The packaging process starts at 8 a.m. sharp in the morning, so please go ahead and cancel the order through “MY ACCOUNT” page, or the confirmation email that you received. The order will not be eligible for cancellation if it has already been fulfilled.", 
        "*CS Operating Hours: 10:00 to 18:00 (KST) / 18:00 - 02:00 (PST)"
    ]],
    ["Q. I made a mistake with my order. Can I edit it?", [
        "We suggest you cancel the original order and place a new one. If you had applied a discount code, you must inquire the customer service for a new one, as it cannot be reused.", 
        "If you placed a large order and is complicated to cancel it, our customer service center will edit the order for you. However, please keep in mind that we won't be able to assist during the non-operating hours (02:00 - 18:00, PST), due to the time difference."
    ]],
    ["Q. I provided an incorrect address. How can I change it?", [
        "If you ordered with a wrong address, you must contact our customer service center (help@anua.us) as soon as possible. Keep in mind that if your order has already been fulfilled, we won’t be able to help you further.", 
        "You may contact the customer service of the courier, UPS, but any extra charge upon this address change request is subject to the customer."
    ]],
    ["Q. Why am I charged twice for an order I placed with PayPal?", [
        "We apologize for the confusion and inconvenience caused to you.", 
        "PayPal has a unique payment system called the <q>pre-authorization</q>. When a customer places an order, PayPal goes through a review of the payment to verify whether or not they can approve it. In this process, they charge the customer for the same amount, but actually this is just a temporary charge which will be pending during the review process. The second charge will be refunded as soon as the first payment has been approved.", 
        "We are sorry to tell you that this is not a feature that we can control. We would truly appreciate it if you could wait a few hours or days for the payment to be approved, as you will get refunded for the pre-authorized payment soon.", 
        "Please let us know if you do not get refunded for the second charge within a month.", 
        "We appreciate your understanding!"
    ]],
    ["Q. When will my order ship out?", [
        "Our warehouse starts processing the orders every day at 8 a.m. (PST). And the packages will ship out from LA. A shipping confirmation email with the tracking number will be sent to you once the order is dispatched."
    ]],
    ["Q. What courier do you use, and how long does it take to arrive?", [
        "We use UPS for the courier service and the delivery time varies by location. It usually takes about 6-7 business days on average, but duly note that there may be delays for unforeseen factors that occur during the shipment process.",
        "Please provide a physical address, as UPS does not ship to PO Box, FPO/DPO/APO addresses.",
        "We appreciate your understanding!"
    ]],
    ["Q. What is the shipping cost? And which countries do you ship to?", [
        "For US residents, a flat rate of $6.99 will be charged for shipping. However, please be noted that it may vary depending on the region, such as Hawaii or Alaska. Free shipping is offered for any orders above $60.",
        "International shipping apart from the US is unavailable at the moment. We will try our best to offer worldwide shipping ASAP!",
    ]],
    ["Q. Tracking shows that my package was delivered but I have not received it.", [
        "If you have not received your package, please reach out to the customer service as soon as possible. To contact our customer service center, refer to the [Contact Us] page at the bottom of the website.",
        "However, please keep in mind that the customer is responsible for the missing package if it was not delivered correctly due to the incorrect address provided.",
    ]],
    ["Q. How can I track my order?", [
        "You will receive a shipping confirmation email when the order ships out. Refer to the tracking number you received in the email, or you may also find it in your “My Account” page.",
        "For your reference, we use UPS as our shipping courier service.",
    ]],
    ["Q. My package arrived with something damaged.", [
        "We truly apologize for the issue. In this case, please provide three pictures at help@anua.us as guided below:",
        "1) A picture of the exterior packaging, with the tracking number showing on the shipping label.",
        "2) A picture of all the items inside the original packaging.",
        "3) A picture of the actual item that was damaged.",
        "Please note that compensation may not be offered if the aforementioned pictures are not provided. Make sure to take the pictures first, and then discard the packaging. We appreciate your cooperation on this matter.",
    ]],
    ["Q. I am missing an item or received a product that I did not order.", [
        "Please contact our customer service and provide a picture of all the items that you received. Customer service contact information can be found at the bottom of the website at [Contact Us].",
        "We will get back to you as soon as possible, after checking with the warehouse.",
        "Duly note that there may cases where we will have to retrieve the package. So please keep the items in their original condition without opening them."
    ]],
    ["Q. I would like to exchange some items.", [
        "Unfortunately, we are not offering exchanges at the moment. Please contact the customer service to request a return, and place a new order.",
    ]],
    ["Q. I would like to return the items that I purchased.", [
        "In order to return any items, you must comply with the following.",
        `                <ul>
        <li>
            Return requests should be done within 14 days from the day of arrival.
        </li>
        <li>
            The items must be sealed, unused, and in the same condition that you received them.
        </li>
        <li>
            Any gifts that were given for free should be included as well.
        </li>
        <li>
            You must inform the customer service about the return in advance, and receive confirmation.
        </li>
        </ul>`,
        "The return process is as follows:",
        `                <ol>
        <li>
            Once you reach out to the customer service team regarding the return, you will receive a
            return label via e-mail. (Customer service email: help@anua.us)
        </li>
        <li>
            Please print out and bring the return label to the UPS center, where you will submit the
            returning package. (You can print the return label at their center as well).
        </li>
        <li>
            The refund will be processed once the package is returned and inspected by our
            warehouse, and they have confirmed that there are no issues found.
        </li>
        <li>
            If the return is based on change of mind (ex. no longer need, not expected product), the
            customer is responsible for the round shipping fee.
        </li>
        </ol>`,
        "▶ [Orders under $60] The value corresponding to the return label will be excluded from the refund, and so will the first standard shipping fee that you paid when placing the order.",
        "▶ [Orders over $60] The value corresponding to the return label will be excluded from the refund, and so will the first standard shipping fee that you were not charged, for receiving free shipping.",
        "▶ [Partial returns] The customer will be responsible for the return shipping fee of $6.99 (variable depending on the region).",
        "Please read the regulations carefully and contact our customer service regarding the return.Please read the regulations carefully and contact our customer service regarding the return."
    ]],
    ["Q. Can I order without creating an account?", [
        "Yes, you may place an order without creating an account.",
        "However, please note that in that case, you will not be eligible for any promotion offers, or member-exclusive perks."
    ]],
    ["Q. I would like to delete my account.", [
        "If you do not want to provide or keep your personal information with us, please reach out to help@anua.us. We will help you out with the removal and inactivation of your account."
    ]],
    ["Q. What is the Period After Opening (PAO) date of anua products?", [
        "The Period After Opening is generally 12 months for anua skincare products. modify the code like sidebar nike",
    ]],
    ["Q. Can pregnant women use the products?", [
        "All anua products have been certified as EWG Green grade, so they do not include harmful ingredients. However, please be noted that pregnancy can cause hormonal changes, so you may find new skin reactions that were not problematic before.",
        "Please test out the products in the inner arm or wrist first, and then apply them on your face if you don't have any issues."
    ]],
    ["Q. Do you have a referral link? How can I refer my friends? ", [
        "On the bottom left side of the website, you will see a “REWARD” icon. Click it and scroll down to find your exclusive URL, and copy the link. Send it to your friend or family, and if that person creates an account or makes a purchase through that link, both of you will receive discount coupons!",
    ]],
    ["Q. I followed the social media channels but did not get credited.", [
        "In case of social media followings, please use the link connected to the REWARD icon, at the bottom left corner of the website. Find the category that reads “WAYS TO EARN” where you will get linked to each SNS page.",
        "If you did not receive credit after following our channels through the link, or have already followed us by accessing through your personal social media page, please let us know and we will help you further."
    ]],
    ["Q. What forms of payment do you accept?", [
        "We accept paypal and eximbay payment at the moment.",
        "Please note that you do not have to be a member of paypal in order to use it. You may check out as a guest and still pay with your debit/credit card."
    ]],
    ["Q. How long does it take to receive a refund?", [
        "The refund process will depend on the payment gateway and the card company.",
        "Even if we have processed a refund from our end, it may take longer for the 3rd party to approve it. In case you do not receive a refund for more than 2 weeks, please contact the card company."
    ]]
];

// marking the end..