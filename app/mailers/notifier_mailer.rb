class NotifierMailer < ApplicationMailer
    def new_account(recipient, fullname)
        # attachments["attachment.pdf"] = File.read("path/to/file.pdf")
        
        mail(
            to: recipient,
            from: 'from@tabetai.com',
            subject: "New account information",
            content_type: "text/html",
            body: "<html><body><h1>Nueva Reservación</h1><p>Hola #{fullname},</p><p>
            Muchas gracias por haber creado una reserva con nosotros.</p><p>Estamos entusiasmados de verte acá!</p>
            <p>Muchos saludos,</p><p>The Tabetai Team</p><p>Email #{recipient}.</p></body></html>"
        )
    end
end
