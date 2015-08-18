/**
 * Created by Zen on 2015/8/18.
 */
var KingJoffery = (function () {
    function KingJoffery() {

    }

    KingJoffery.prototype.makeDecision = function () {
        console.log('KingJoffery make decision');
    };
    KingJoffery.prototype.marry = function () {
        console.log('marry');
    };
    return KingJoffery;
})();

var LordTywin = (function () {
    function LordTywin() {
    }

    LordTywin.prototype.makeDecision = function () {
        console.log('LordTywin make decision');
    };
    return LordTywin;
})();

var LannisterFactory = (function () {
    function LannisterFactory() {
    }

    LannisterFactory.prototype.getKing = function () {
        return new KingJoffery();
    };
    LannisterFactory.prototype.getHandOfTheKing = function () {
        return new LordTywin();
    };
    return LannisterFactory;
})();
var TargaryenFactory = (function () {
    function TargaryenFactory() {
    }
    TargaryenFactory.prototype.getKing = function () {
        return new KingAerys();
    };
    TargaryenFactory.prototype.getHandOfTheKing = function () {
        return new LordConnington();
    };
    return TargaryenFactory;
})();
var CourtSession = (function () {
    function CourtSession(abstractFactory) {
        this.abstractFactory = abstractFactory;
        this.COMPLAINT_THRESHOLD = 10;
    }

    CourtSession.prototype.complaintPresented = function (complaint) {
        if (complaint.severity < this.COMPLAINT_THRESHOLD) {
            this.abstractFactory.getHandOfTheKing().makeDecision();
        } else {
            this.abstractFactory.getKing().makeDecision();
        }
    };
    return CourtSession;
})();
var courtSession1 = new CourtSession(new TargaryenFactory());
courtSession1.complaintPresented({ severity: 8 });
courtSession1.complaintPresented({ severity: 12 });
var courtSession2 = new CourtSession(new LannisterFactory());
courtSession2.complaintPresented({ severity: 8 });
courtSession2.complaintPresented({ severity: 12 });

