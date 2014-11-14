<?php 
        $amount = 0;
        $type = '';
        if ($_POST["code"] == "test")
        {
            $amount = 5;
            $type = 'percentage';
        };
        if ($_POST["code"] == "test2")
        {
            $amount = 10;
            $type = 'amount';
        };
        $values = array('value'=>$amount,'type'=>$type);

        echo json_encode($values);
?>