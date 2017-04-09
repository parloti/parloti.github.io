!function () {
    let AddressModel = Backbone.Model.extend({});
    let AddressBookCollection = Backbone.Collection.extend({
        model: AddressModel,
        comparator: 'name'
    });
    let addressView = Backbone.View.extend({
        tagName: "tr",
        template: _.template("<td><%= name %></td><td><%= city %></td>"),
        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    let AddressBookView = Backbone.View.extend({
        el: '#addressbook',
        template: _.template("<tr><td><%=name%></td><td><%=city%></td></tr>"),
        events: {
            "click button": "newAddress",
            "keypress input": "checkKeyPressed",
        },
        initialize: function () {
            this.listenTo(addressBookCollection, 'add', this.addedAddress);
        },
        addedAddress: function (address) {
            var view = new addressView({model: address});
            $("#addresslist").append(view.render().el);
            $("#name").val('');
            $("#city").val('');
            $("#name").focus();
        },
        newAddress: function () {
            addressBookCollection.create({
                name: $("#name").val(),
                city: $("#city").val()
            });
        },
        checkKeyPressed: function (event) {
            if (event.key === "Enter" && $("#name").val() !== ""&& $("#city").val() !== "") {
                this.newAddress();
            }
        }
    });
    let addressBookCollection = new AddressBookCollection();
    new AddressBookView();
}();