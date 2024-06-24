---
layout: post
title: "Data Migration Essentials: Planning and Execution Strategies"
excerpt: "Software is useless without data. Good, accurate, useful data is critical to every business."
date: 2024-06-21T00:00:00.0000000-04:00
categories:
    - data
featured: false
draft: false
parent-name: "Building With Skratsch"
parent-url: "/posts"
image: "/images/post/data-migration-header-2.jpg"
---
In a software development or software selection project, the software
gets all the attention. Lots of effort goes into selecting, configuring,
and [customizing software](/software-development-services/customization) to fit the organization's needs. On one hand, it's
understandable. Software is the shiny new toy you just purchased.

But software is useless without data. Good, accurate, useful data is
critical to every business.

Think about it. Would you rather have a paper document that showed every
customer and every order at a glance or a beautiful empty software
application? There's no question what you'd choose. Yet data migration
consistently seems to be an afterthought -- and that's a mistake.

Data migration is more complex than people realize. The task is never as
simple as copy-and-pasting or importing an Excel file. It involves
moving, transforming, and validating large volumes of data while
ensuring data integrity, security, and accuracy. Rushing through this
process increases the risk of errors, data loss, and inconsistencies.
Proactive data migration planning helps ensure a successful software
launch.

## Creating a data migration strategy

You need a plan or sub-project within your software implementation
project that addresses the data migration strategy. In this plan you
identify the steps, resources, and risks.

1.  What systems have the source data?
2.  What's the condition of that data? How new or old is it?
3.  How will the data be extracted, transformed, and loaded (ETL)? (Read
    on for more details about the challenges to address in each of these
    phases.)
4.  Who will be doing this work and when?


![Data migration strategic considerations](/images/post/strategy-1.png)

By planning well in advance, you give yourself ample time to assess
these risks and create a plan that will minimize disruptions to business
operations.

## Considerations for a data migration

### Phase 1: Data extraction

You may be surprised to learn that data cannot always be easily
extracted from a business system. Even when the data can be exported, it
has to be cleaned up before it can be used.

![Data extraction considerations](/images/post/data-extraction-1.png)

#### **No easy data export**

Some vendors don't offer mechanisms to download data. Your software
vendor may have a "backup file" that will allow you to backup and
reimport your data into the same system. However, if you want to move to
a different system, you may have no options, other than perhaps a simple
spreadsheet with limited records.

That's because the data within business systems have a complex
structure, with nested tables, arrays, and linked records. So even when
you can extract records like orders, customers, and vendors, it's common
to lose the relationship between the records.

#### **Inaccurate data**

Another issue is that the data in the system of origin may not be in
good condition. You may have duplicate contact records or missing
information. How can you tell what's good and what's not?

-   Customers that have moved
-   Client contacts who have retired
-   Products you no longer offer
-   Missing part of an address
-   Duplicate contact records

Often, only someone on your team will have this knowledge. Your tech
team can tell if a ZIP code is missing but won't know that Bob Smith is
now working for a different company. Who will spend time evaluating the
quality of the data? Spending time cleaning up data at this point will
save you time and money in the data transformation phase of the data
migration project.

#### **Old data**

You may also have good data that's just old. Do you really need to know
about that one customer who made a small purchase over a decade ago? Are
these records still needed for legal or regulatory reasons? How will you
determine "how old is too old"? Are you going to keep the original
system running for a while? Will there be a way to access that data once
the migration is complete?

Bringing in data you don't need can slow system performance. Plus,
having irrelevant data clogs up the system, making it more difficult for
employees to quickly find what they need.

You have three choices when it comes to managing old data:

1.  Keep the old system running in parallel, at least until you're
    confident that you no longer need those older records.
2.  Create a cutoff point. Current data goes to the new system.
    Historical data is available in a spreadsheet or small database
    somewhere.
3.  Clean up and import all data. This is typically the least advised
    and most expensive option.

### Phase 2: Data transformation

The transformation phase is the stop where the extracted data is
processed, cleansed, and transformed to fit the structure and
requirements of the new system.

#### **Data cleansing**

During the data extraction phase, you likely found issues in the source
system where the data contains errors, duplicates, missing values, or
inconsistencies. In the data transformation phase, data cleansing
processes are applied to identify and rectify these issues. This
includes removing or correcting inaccuracies, eliminating duplicates,
and filling in missing values using predefined rules.

![data transformation considerations](/images/post/data-transformation-1.png)

#### **Data formatting**

The new and old systems may have different types of fields and different
validation criteria within those fields. For example, one system may
have dates as 08/10/2024 and the other 2024/08/10. One system may have a
radio button or checkbox selection and the other a text field. During
transformation, data is converted and formatted according to the
specifications of the new software application. This could involve
converting dates, numbers, or other data types to match the expected
format.

#### **Creating unique keys**

When data includes hierarchical or relational structures, such as
parent-child relationships or linked records, these relationships need
to be maintained during transformation. If the information doesn't
already exist or its unclear how to differentiate similar records from
each other, the development team may need to create unique keys or
identifiers.

#### **Data enrichment**

Sometimes, a company will enhance the migrated data with additional
information. Common types of data enrichment include adding geographical
location, social media profiles, or additional detail about your
products. During the transformation phase, relevant external data can be
integrated to enrich the existing data.

#### **Creating custom calculations and business logic**

Certain data might require custom calculations or application of
specific business rules to transform it appropriately. This could
involve calculating derived fields, applying pricing formulas, or
categorizing data based on business logic.

#### **Data validation**

Validation rules are applied to ensure that the transformed data stays
accurate. This involves checking for data integrity, referential
integrity, accuracy, and adherence to business rules. Data that fails
validation can be flagged for further review or corrective action.

### Phase 3: Data loading

Data loading is the final step in the ETL (Extract, Transform, Load)
data migration process, where the transformed and processed data is
loaded into the target system or database. This step involves taking the
refined data from the transformation phase and placing it in the
appropriate format within the new environment. Here are the steps
typically involved in the data loading phase of an ETL data migration:

![data loading considerations](/images/post/data-loading-1.png)

#### **Data staging**

Before going live on the production system, the new software system and
data are often loaded onto a staging server or database. This staging
area serves as a buffer, allowing for data validation, error checking,
and ensuring that the data is ready for final loading. It also gives the
team a good idea about the amount of time it'll take to load the data.

During the staging process, business users are asked to do a final round
of validation checks to ensure the data is consistent, complete, and
conforms to the expected format.

Despite all of the above preparations, during the data loading process,
errors can occur. It's common to discover data format mismatches or
database constraint violations. These errors are logged, analyzed and
corrected.

#### **Data loading strategies**

The team will employee one of three strategies for loading data into the
target system:

-   **Full Load:** Loading all data from scratch. Suitable for smaller
    datasets or when historical data is not important.
-   **Incremental Load:** Only loading new or changed data since the
    last load. Suitable for larger datasets or when historical data is
    required.
-   **Delta Load:** Loading only the changes or differences in data
    since the last load. Often used for real-time or near-real-time data
    updates.

#### **Validation**

After loading, data quality checks are performed again to ensure that
the data in the new system meets expectations. This involves comparing
the data in the new system with the source system to ensure accuracy and
completeness. Users will check to ensure that data relationships,
constraints, and business rules are upheld. The team will also make sure
that no data was lost or altered during the loading process.

#### **Logging data loads**

Throughout the data loading process, detailed logs are maintained,
capturing the details of each load, errors encountered, and other
relevant information. These logs aid in troubleshooting and maintaining
an audit trail.

### Don't wait to plan the data migration process!

Leaving data migration until the last minute leaves little time for
proper planning, communication, and training. As you can see, the
process is more complex and takes longer than most people expect.
Planning ahead makes the whole project run smoother, reducing confusion,
resistance, and frustration during the transition to the new system.

And as always, remember to create [backup and recovery procedures](/it-services/backup-and-recovery-services) and take data security steps to protect your new
system. Whether it's a custom software program or a [commercial off-the-shelf](/software/custom-software-weighing-your-options) line of business application, your data (and your
business) deserve protection.