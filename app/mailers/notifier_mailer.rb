class NotifierMailer < ApplicationMailer
    def new_account(recipient)
        # attachments["attachment.pdf"] = File.read("path/to/file.pdf")
        
        mail(
            to: recipient,
            from: 'from@tabetai.com',
            subject: "New account information",
        )
    end
end
