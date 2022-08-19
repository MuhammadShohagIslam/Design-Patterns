/*
    *** DRY Principles(Do not Repeat Yourself) ***
        => It's knowledge,this business logic which should not be
            duplicated.
        => We should not need to update in parallel multiple things when one change occurs.
        => It our knowledge is repeated two times in our code and we need to change it, we might forget to change it everywhere.
       
    *** DRY is about Duplication of Knowledge ***
        => """ Every piece of knowledge must have a single, clear, 
                authoritative representation within a system """(The Pragmatic Programmer)
        
        What is piece of knowledge?
            => A precise functionality in the business domain of our application.
            => An Algorithm
        => The representation of that knowledge should be used 
        everywhere without repeating the knowledge itself.

    
    *** DRY and Code Duplication ***
        => Knowledge duplication is always a DRY principle violation
        => Code duplication does not necessarily violate the principle.

    """ Many people took it [the DRY principle] to refer to code only: they thought that DRY means "do not copy and paste lines of source". DRY is about the duplication of knowledge, of intent.It's about expressing the same thing in two different places, possibily in two totally different ways."""

    *** Trying to apply DRY everywhere can have two results ***
        => Unneccessary coupling.
        => Unnecessary complexity.
     

    *** Premature Refactoring ***
        => We should not apply the DRY principle if our business logic
        does not have any duplication yet. It depends of the context.
        => Trying to apply DRY to something which is only used in one place can lead to premature generalization.
        => Code reuse and code duplication are two different things.
        DRY states that we should not duplicate knowledge, not that should be use abstractions to reuse everything, everywhere.

        * Duplication is far cheaper than the wrong abstraction *

    *** Dry is not Only About Code ***
        => DRY is not something we should only respect in our code.
        we should not repeat the knowledge of our business domain in anything related to our project.

        """ A system knowledge is far broader than just its code.
        It refer to database schemas, test plans, the build system, even documentation """ (Dave Thomas)
*/
